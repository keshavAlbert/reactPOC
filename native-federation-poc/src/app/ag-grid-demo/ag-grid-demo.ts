/* ag-grid-demo.component.ts — optimized + hierarchical grouping + accordions */
import { Component, NgZone } from '@angular/core';
import { NgStyle } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community';

import {
  AllCommunityModule,
  ColDef,
  GridOptions,
  ICellRendererParams,
  RowDragEndEvent,
  RowDragMoveEvent,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
  id: number;
  region: string;
  country: string;
  city: string;
  [key: string]: string | number;
}

@Component({
  selector: 'ag-grid-demo',
  standalone: true,
  imports: [AgGridAngular, NgStyle],
  template: `
    <div
      class="ag-theme-quartz"
      [ngStyle]="{ height: '100vh', width: gridWidth + 'px', margin: '0 auto' }"
    >
      <ag-grid-angular
        style="width:100%;height:100%;display:block;"
        [columnDefs]="colDefs"
        [rowData]="rowData"
        [gridOptions]="gridOptions"
        [groupDisplayType]="'custom'"
        (rowDragEnd)="onRowDragEnd($event)"
        (rowDragMove)="onRowDragMove($event)"
        (gridReady)="onGridReady($event)"
      ></ag-grid-angular>
    </div>
  `,
})
export class AgGridDemoComponent {
  private readonly ROWS = 50000;
  private readonly COLS = 300;
  private readonly COL_WIDTH = 150;
  private readonly VISIBLE_COLS = 10;

  readonly gridWidth = this.COL_WIDTH * this.VISIBLE_COLS;

  colDefs: ColDef<RowData>[] = [];
  rowData: RowData[] = [];
  gridApi: any;

  gridOptions: GridOptions<RowData> = {
    suppressRowTransform: true,
    suppressColumnVirtualisation: false,
    suppressRowVirtualisation: false,
    rowBuffer: 5,
    animateRows: false,
    enableCellTextSelection: true,
    rowDragManaged: true,
    groupDefaultExpanded: 0,
    getRowId: (p) => String(p.data.id),
    autoGroupColumnDef: {
      headerName: 'Group Hierarchy',
      minWidth: 220,
      cellRendererParams: {
        suppressCount: true,
        innerRenderer: (p: any) => {
          const container = document.createElement('div');
          container.style.display = 'flex';
          container.style.alignItems = 'center';
          container.style.gap = '6px';

          // accordion expand/collapse icon
          const icon = document.createElement('span');
          icon.textContent = p.node.expanded ? '▼' : '▶';
          icon.style.cursor = 'pointer';
          icon.style.userSelect = 'none';
          icon.onclick = (ev) => {
            ev.stopPropagation();
            p.node.setExpanded(!p.node.expanded);
            icon.textContent = p.node.expanded ? '▼' : '▶';
          };

          const label = document.createElement('span');
          label.textContent = p.value;
          label.style.whiteSpace = 'nowrap';
          label.style.overflow = 'hidden';
          label.style.textOverflow = 'ellipsis';

          container.appendChild(icon);
          container.appendChild(label);
          return container;
        },
      },
    },
    defaultColDef: {
      resizable: true,
      sortable: false,
      width: this.COL_WIDTH,
    },
    suppressColumnMoveAnimation: true,
    suppressAnimationFrame: true,
    suppressContextMenu: true,
    suppressClipboardApi: true,
    suppressFieldDotNotation: true,
  };

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => this.initGrid());
  }

  private initGrid() {
    const defs: ColDef<RowData>[] = [];

    defs.push({
      headerName: 'Name (drag)',
      field: 'c0',
      width: this.COL_WIDTH,
      minWidth: this.COL_WIDTH,
      rowDrag: true,
      cellRenderer: (p: ICellRendererParams<RowData>) => {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'space-between';
        container.style.gap = '8px';
        container.style.width = '100%';
        container.style.boxSizing = 'border-box';

        // accordion icon only for top-level groups
        if (p.node.group && p.node.level === 0) {
          const icon = document.createElement('span');
          icon.textContent = p.node.expanded ? '▼' : '▶';
          icon.style.cursor = 'pointer';
          icon.style.userSelect = 'none';
          icon.onclick = (ev) => {
            ev.stopPropagation();
            p.node.setExpanded(!p.node.expanded);
            icon.textContent = p.node.expanded ? '▼' : '▶';
          };
          container.appendChild(icon);
        }

        const name = document.createElement('span');
        name.textContent = String(p.value ?? `Row ${p.node?.rowIndex ?? ''}`);
        name.style.overflow = 'hidden';
        name.style.textOverflow = 'ellipsis';
        name.style.whiteSpace = 'nowrap';
        name.style.flex = '1';
        container.appendChild(name);

        const menuBtn = document.createElement('span');
        menuBtn.textContent = '⋮';
        menuBtn.style.cursor = 'pointer';
        menuBtn.title = 'Options';
        container.appendChild(menuBtn);

        return container;
      },
    });

    for (let c = 1; c < this.COLS; c++) {
      const field = `c${c}`;
      const type = c % 3;
      if (type === 0) {
        defs.push({
          headerName: `Calc${c}`,
          field,
          width: this.COL_WIDTH,
          cellRenderer: (p: ICellRendererParams<RowData>) => {
            const val = Number(p.value ?? 0);
            return `<div style="text-align:right;">${(val * 1.37).toFixed(2)}</div>`;
          },
        });
      } else if (type === 1) {
        defs.push({
          headerName: `Img${c}`,
          field,
          width: 90,
          cellRenderer: (p: ICellRendererParams<RowData>) => {
            const rid = p.node?.rowIndex ?? 0;
            return `<div style="display:flex;justify-content:center;">
              <img loading="lazy" src="https://picsum.photos/seed/${rid}-${c}/28"
              width="28" height="28" style="border-radius:50%;" />
            </div>`;
          },
        });
      } else {
        defs.push({
          headerName: `Name${c}`,
          field,
          width: this.COL_WIDTH,
          cellRenderer: (p: ICellRendererParams<RowData>) =>
            `<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:6px;">${
              p.value ?? ''
            }</div>`,
        });
      }
    }

    this.colDefs = defs;
    this.rowData = this.generateHierarchicalRows();
  }

  /** Generate hierarchical groups: Region → Country → City → Rows */
  private generateHierarchicalRows(): RowData[] {
    const regions = ['Americas', 'Europe', 'Asia'];
    const countries: Record<string, string[]> = {
      Americas: ['USA', 'Brazil', 'Canada'],
      Europe: ['Germany', 'France', 'Italy'],
      Asia: ['India', 'China', 'Japan'],
    };
    const cities: Record<string, string[]> = {
      USA: ['New York', 'San Francisco', 'Chicago'],
      Brazil: ['Rio', 'São Paulo'],
      Canada: ['Toronto', 'Vancouver'],
      Germany: ['Berlin', 'Munich'],
      France: ['Paris', 'Lyon'],
      Italy: ['Rome', 'Milan'],
      India: ['Bangalore', 'Mumbai'],
      China: ['Beijing', 'Shanghai'],
      Japan: ['Tokyo', 'Osaka'],
    };

    const rows: RowData[] = [];
    let idCounter = 0;

    for (const region of regions) {
      for (const country of countries[region]) {
        for (const city of cities[country]) {
          for (let r = 0; r < this.ROWS / 90; r++) {
            const row: RowData = {
              id: idCounter++,
              region,
              country,
              city,
            };
            for (let c = 0; c < this.COLS; c++) {
              const type = c % 3;
              if (type === 0) row[`c${c}`] = Math.round(Math.random() * 1000);
              else if (type === 1) row[`c${c}`] = `img-${r}-${c}`;
              else row[`c${c}`] = `Name_${r}_${c}`;
            }
            rows.push(row);
          }
        }
      }
    }

    return rows;
  }

  onGridReady(e: any) {
    if (!e || !e.api) {
      console.warn('gridReady called but no api present', e);
      return;
    }

    this.gridApi = e.api;

    console.log('gridAPi:::', this.gridApi);

    const initialCols = this.colDefs.slice(0, 20);
    this.gridApi.setColumnDefs(initialCols);
    setTimeout(() => this.gridApi.setColumnDefs(this.colDefs), 10);

    // group by Region > Country > City
    e.columnApi.applyColumnState({
      state: [
        { colId: 'region', rowGroup: true },
        { colId: 'country', rowGroup: true },
        { colId: 'city', rowGroup: true },
      ],
    });
  }

  onRowDragMove(e: RowDragMoveEvent<RowData>) {}
  onRowDragEnd(e: RowDragEndEvent<RowData>) {
    const moving = e.node?.data;
    const overGroup = e.overNode?.key;
    if (moving && overGroup && moving.city !== overGroup) {
      moving.city = String(overGroup);
      e.api.applyTransaction({ update: [moving] });
      console.log(`Moved row ${moving.id} → ${moving.city}`);
    }
  }
}
