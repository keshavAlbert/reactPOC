// batching demo
export function createBatchQueue({ debounceMs }: { debounceMs: number }) {
  console.log("CALLING createBatchQueue FROM SHARED LIB");
  let timer: any;
  const map = new Map<string, any>();
  let onBatch = (batch: any[]) => {};
  return {
    push(key: string, edit: any) {
      map.set(key, edit);
      clearTimeout(timer);
      timer = setTimeout(() => {
        const batch = [...map.values()];
        map.clear();
        console.log("CALLING onBatch");
        onBatch(batch);
      }, debounceMs);
    },
    onBatch(cb: (batch: any[]) => void) { onBatch = cb; }
  };
}

// simple validator
export const validators = {
  isQuantity: (s: string) => /^\s*\d+(\.\d+)?\s*[a-zA-Zµ%]*\s*$/.test(s)
};

// version marker
export const version = '0.0.1';
