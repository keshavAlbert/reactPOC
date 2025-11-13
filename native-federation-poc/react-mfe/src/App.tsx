import React, { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  ModuleRegistry,
  ColDef,
  GridOptions,
  RowDragEndEvent,
} from 'ag-grid-community';
import { HyperFormula } from 'hyperformula';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

ModuleRegistry.registerModules([AllCommunityModule]);

type RowData = {
  id: number;
  group: string;
  name: string;
  valueA: number;
  valueB: number;
  sum?: number;
  image?: string;
};

// --- Custom Cell Renderer with 3-dot menu + optional image ---
const CustomRenderer: React.FC<any> = ({ value, data, colDef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {colDef.field === 'image' && data.image ? (
        <img src={data.image} alt="pic" style={{ width: 24, height: 24, borderRadius: '50%' }} />
      ) : null}
      <span>{value}</span>
      {colDef.field === 'name' && (
        <div style={{ marginLeft: 'auto', position: 'relative' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              padding: 0,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            ⋮
          </button>
          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: 0,
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: 6,
                boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                zIndex: 5,
              }}
            >
              <div style={{ padding: '6px 12px', cursor: 'pointer' }}>Edit</div>
              <div style={{ padding: '6px 12px', cursor: 'pointer' }}>Delete</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const gridRef = useRef<AgGridReact<RowData>>(null);
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);
  const hf = useMemo(() => HyperFormula.buildEmpty({ licenseKey: 'gpl-v3' }), []);

  useEffect(() => {
    const groups = ['Alpha', 'Beta', 'Gamma', 'Delta'];
    const rows: RowData[] = [];
    let id = 1;

    for (const g of groups) {
      for (let i = 0; i < 12500; i++) {
        const a = Math.floor(Math.random() * 1000);
        const b = Math.floor(Math.random() * 1000);
        rows.push({
          id: id++,
          group: g,
          name: `Row ${id}`,
          valueA: a,
          valueB: b,
          image: `https://picsum.photos/seed/${id}/40/40`,
        });
      }
    }
    setRowData(rows);
  }, []);

  useEffect(() => {
    const cols: ColDef[] = [
      {
        field: 'name',
        headerName: 'Name (drag)',
        width: 160,
        rowDrag: true,
        cellRenderer: CustomRenderer,
        pinned: 'left',
      },
      { field: 'group', headerName: 'Group', rowGroup: true, hide: true },
      {
        field: 'image',
        headerName: 'Image',
        width: 100,
        cellRenderer: CustomRenderer,
      },
      {
        field: 'valueA',
        headerName: 'A',
        editable: true,
        width: 120,
      },
      {
        field: 'valueB',
        headerName: 'B',
        editable: true,
        width: 120,
      },
      {
        headerName: 'A + B (HF)',
        valueGetter: (params) => {
          const a = params.data?.valueA ?? 0;
          const b = params.data?.valueB ?? 0;
          return a + b;
        },
        width: 150,
      },
    ];

    // add dynamic columns up to 300 total
    for (let i = cols.length; i < 300; i++) {
      cols.push({
        field: `col${i}`,
        headerName: `Col ${i}`,
        width: 150,
        valueGetter: (p) => (p.node?.rowIndex ?? 0) * (i % 10),
      });
    }

    setColumnDefs(cols);
  }, []);

  const gridOptions: GridOptions<RowData> = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      suppressMovable: false,
    },
    rowDragManaged: true,
    rowGroupPanelShow: 'always',
    groupDisplayType: 'groupRows',
    animateRows: true,
    suppressColumnVirtualisation: false,
    suppressRowVirtualisation: false,
    getRowId: (params) => String(params.data.id),
    onRowDragEnd: (e: RowDragEndEvent<RowData>) => {
      console.log('Row dropped', e.node?.data);
    },
  };

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={gridOptions}
        enableCellTextSelection={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default App;
