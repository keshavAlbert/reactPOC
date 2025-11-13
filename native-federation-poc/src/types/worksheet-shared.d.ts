// src/types/worksheet-shared.d.ts
declare module '@albert/worksheet-shared' {
  export function createBatchQueue(opts: { debounceMs: number }): {
    push(key: string, edit: any): void;
    onBatch(cb: (batch: any[]) => void): void;
  };
  export const validators: { isQuantity(s: string): boolean };
  export const version: string;
}
