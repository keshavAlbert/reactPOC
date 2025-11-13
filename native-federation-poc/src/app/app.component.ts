import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { AgGridDemoComponent } from './ag-grid-demo/ag-grid-demo';
import { MFE_CTX } from '../main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, NgIf, AgGridDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private injectedCtx = inject(MFE_CTX);
  private cd = inject(ChangeDetectorRef);

  @Input()
  set ctx(v: any) {
    if (v != null) this.ctxSig.set(v);
  }
  get ctx() {
    return this.ctxSig();
  }

  ctxSig = signal<any>(this.injectedCtx);
  status = '';

  activeView: 'angular' | 'react' = 'angular'; // default view

  switchView(view: 'angular' | 'react') {
    this.activeView = view;
  }

  async tryShared() {
    try {
      this.status = 'loading shared lib...';
      const spec = '@albert' + '/worksheet-shared';
      // @ts-ignore
      const lib: typeof import('@albert/worksheet-shared') = await import(
        /* @vite-ignore */ spec as any
      );
      const q = lib.createBatchQueue({ debounceMs: 300 });
      q.onBatch((b: any[]) => {
        this.status = `Angular got batch size=${b.length} (v ${lib.version})`;
        this.cd.detectChanges();
      });
      q.push('R1|A', { rowId: 'R1', colId: 'A', value: 42 });
    } catch (e) {
      console.error('shared lib import failed:', e);
      this.status = 'shared lib not available (import map / CORS / server-down?)';
    }
  }
}
