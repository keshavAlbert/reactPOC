import { createApplication } from '@angular/platform-browser';
import {
  createComponent,
  InjectionToken,
  EnvironmentInjector,
  provideZonelessChangeDetection,
} from '@angular/core';
import { AppComponent } from './app/app.component';

export const MFE_CTX = new InjectionToken<any>('MFE_CTX');
const TAG = 'albert-worksheet-mfe-ng';

// 🔹 Function to dynamically load React MFE script (safe for Angular)
async function loadReactMFE() {
  const REACT_TAG = 'albert-worksheet-mfe-react';
  const REACT_SCRIPT_URL = 'http://localhost:3000/static/js/main.js';

  if (customElements.get(REACT_TAG)) {
    console.log('✅ React MFE already registered');
    return;
  }

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${REACT_SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      return;
    }

    const script = document.createElement('script');
    script.src = REACT_SCRIPT_URL;
    script.type = 'module';
    script.onload = () => {
      console.log('✅ React MFE script loaded');
      resolve();
    };
    script.onerror = (err) => {
      console.warn('⚠️ Failed to load React MFE script:', err);
      reject(err);
    };
    document.head.appendChild(script);
  });
}

class AngularMfeElement extends HTMLElement {
  private app: any | undefined;
  private env: EnvironmentInjector | undefined;
  private comp: ReturnType<typeof createComponent> | undefined;
  private mountEl: HTMLElement | undefined;
  private _ctx: any = {};

  set ctx(v: any) {
    this._ctx = v ?? {};
    if (this.comp?.setInput) this.comp.setInput('ctx', this._ctx);
  }
  get ctx() {
    return this._ctx;
  }

  async connectedCallback() {
    if (this.app) return;

    // ✅ Ensure React web component is registered before Angular runs
    await loadReactMFE();

    const root = this.attachShadow ? this.attachShadow({ mode: 'open' }) : this;

    const styleHost = document.createElement('style');
    styleHost.textContent = `
      @import url("https://unpkg.com/ag-grid-community/styles/ag-grid.css");
      @import url("https://unpkg.com/ag-grid-community/styles/ag-theme-quartz.css");

      .ag-theme-quartz {
        height: 320px;
        width: 100%;
        display: block;
      }
    `;
    root.appendChild(styleHost);

    this.mountEl = document.createElement('div');
    root.appendChild(this.mountEl);

    this.app = await createApplication({
      providers: [{ provide: MFE_CTX, useValue: this._ctx }, provideZonelessChangeDetection()],
    });

    this.env = this.app.injector as EnvironmentInjector;

    this.comp = createComponent(AppComponent, {
      environmentInjector: this.env,
      hostElement: this.mountEl,
    });

    this.app.attachView(this.comp.hostView);
    this.comp.changeDetectorRef.detectChanges();

    if (this._ctx && this.comp.setInput) this.comp.setInput('ctx', this._ctx);
  }

  disconnectedCallback() {
    try {
      this.comp?.destroy();
      this.comp = undefined;
      if (this.mountEl?.parentNode) this.mountEl.parentNode.removeChild(this.mountEl);
      this.mountEl = undefined;
    } catch {}
  }
}

if (!customElements.get(TAG)) {
  customElements.define(TAG, AngularMfeElement);
}
