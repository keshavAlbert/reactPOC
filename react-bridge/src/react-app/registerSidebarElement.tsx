import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import { Sidebar, SidebarItem } from './components/Sidebar';
import { SharedForm } from './components/SharedForm';
import { getOrCreateSharedStore } from '../../../shared/store';
import type { SharedState } from '../../../shared/state';

// GOOD: use Vite raw CSS import instead of await
// @ts-ignore
import cssText from '../styles/sidebar.css?raw';
// @ts-ignore
import sharedFormCss from '../styles/shared-form.css?raw';

const sheet = new CSSStyleSheet();
sheet.replaceSync(cssText);

const formSheet = new CSSStyleSheet();
formSheet.replaceSync(sharedFormCss);

const sharedStore = getOrCreateSharedStore();

type SidebarAttr = { heading?: string; items?: SidebarItem[]; selectedId?: string; };

class ReactSidebarElement extends HTMLElement {
  static get observedAttributes() { return ['heading', 'items', 'selected-id']; }

  private root: ReturnType<typeof createRoot> | null = null;
  private props: SidebarAttr = {};
  private shadowRootRef: ShadowRoot | null = null;
  private unsubscribeFromStore?: () => void;

  connectedCallback() {
    if (!this.shadowRootRef) {
      this.shadowRootRef = this.attachShadow({ mode: 'open' });
      // @ts-expect-error adoptedStyleSheets is supported in the target browsers for this POC
      this.shadowRootRef.adoptedStyleSheets = [sheet];
    }
    if (!this.root) {
      this.root = createRoot(this.shadowRootRef);
    }
    this.props.heading = this.getAttribute('heading') ?? undefined;
    this.props.selectedId = this.getAttribute('selected-id') ?? undefined;
    this.props.items = this.parseItems(this.getAttribute('items'));
    this.render();
    this.subscribeToSharedStore();
  }

  attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null) {
    if (name === 'heading') this.props.heading = newVal ?? undefined;
    if (name === 'selected-id') this.props.selectedId = newVal ?? undefined;
    if (name === 'items') this.props.items = this.parseItems(newVal);
    this.render();
  }

  disconnectedCallback() {
    this.unsubscribeFromStore?.();
    this.unsubscribeFromStore = undefined;
    this.root?.unmount();
    this.root = null;
    this.shadowRootRef = null;
  }

  private parseItems(raw: string | null): SidebarItem[] {
    if (!raw) return [];
    try { const parsed = JSON.parse(raw); return Array.isArray(parsed) ? parsed : []; }
    catch { return []; }
  }

  private render() {
    if (!this.root) return;
    const onSelect = (id: string) => {
      sharedStore.setState({ selectedSection: id });
      // hyphenated event name so Angular treats it as a custom element event
      this.dispatchEvent(new CustomEvent('sidebar-select', { detail: { id }, bubbles: true, composed: true }));
    };
    this.root.render(<StrictMode><Sidebar heading={this.props.heading} items={this.props.items} selectedId={this.props.selectedId} onSelect={onSelect} /></StrictMode>);
  }

  private subscribeToSharedStore() {
    this.unsubscribeFromStore?.();
    this.unsubscribeFromStore = sharedStore.subscribe((state: SharedState) => {
      if (this.props.selectedId !== state.selectedSection) {
        this.props.selectedId = state.selectedSection;
        this.render();
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'react-notebook-sidebar': ReactSidebarElement;
    'react-shared-form': ReactSharedFormElement;
  }
}

class ReactSharedFormElement extends HTMLElement {
  static get observedAttributes() { return ['heading']; }

  private root: ReturnType<typeof createRoot> | null = null;
  private heading?: string;
  private shadowRootRef: ShadowRoot | null = null;

  connectedCallback() {
    if (!this.shadowRootRef) {
      this.shadowRootRef = this.attachShadow({ mode: 'open' });
      // @ts-expect-error adoptedStyleSheets is supported in the target browsers for this POC
      this.shadowRootRef.adoptedStyleSheets = [formSheet];
    }
    if (!this.root) {
      this.root = createRoot(this.shadowRootRef);
    }
    this.heading = this.getAttribute('heading') ?? undefined;
    this.render();
  }

  attributeChangedCallback(_name: string, _oldVal: string | null, newVal: string | null) {
    this.heading = newVal ?? undefined;
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
    this.shadowRootRef = null;
  }

  private render() {
    if (!this.root) return;
    this.root.render(
      <StrictMode>
        <SharedForm heading={this.heading} />
      </StrictMode>
    );
  }
}

if (!window.customElements.get('react-notebook-sidebar')) {
  window.customElements.define('react-notebook-sidebar', ReactSidebarElement);
}

if (!window.customElements.get('react-shared-form')) {
  window.customElements.define('react-shared-form', ReactSharedFormElement);
}
