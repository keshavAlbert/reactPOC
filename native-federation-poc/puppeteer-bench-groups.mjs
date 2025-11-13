import puppeteer from "puppeteer";
import fs from "fs";

const URL = "http://localhost:4500";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1600, height: 900 },
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  console.log(`🔹 Loading ${URL}`);
  const startLoad = performance.now();
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 120_000 });

  // Wait for AG Grid
  const gridSel = "albert-worksheet-mfe-ng >>> .ag-center-cols-viewport";
  await page.waitForSelector(`${gridSel} .ag-row`, { timeout: 120_000 });
  const renderTime = performance.now() - startLoad;
  console.log(`✅ Grid rendered in ${renderTime.toFixed(1)} ms`);

  // Attach a performance observer in the browser context
  await page.evaluate(() => {
    window._perfData = [];
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        window._perfData.push(entry);
      }
    });
    obs.observe({ entryTypes: ["paint", "measure", "navigation"] });
  });

  // --- Scroll vertically ---
  console.log("↕️ Scrolling vertically...");
  const startV = performance.now();
  await page.evaluate(async () => {
    const el = document.querySelector("albert-worksheet-mfe-ng").shadowRoot
      .querySelector(".ag-center-cols-viewport");
    for (let i = 0; i < 10; i++) {
      el.scrollTop += 500;
      await new Promise((r) => requestAnimationFrame(r));
    }
  });
  const endV = performance.now();
  console.log(`🕒 Vertical scroll time: ${(endV - startV).toFixed(1)} ms`);

  // --- Scroll horizontally ---
  console.log("↔️ Scrolling horizontally...");
  const startH = performance.now();
  await page.evaluate(async () => {
    const el = document.querySelector("albert-worksheet-mfe-ng").shadowRoot
      .querySelector(".ag-center-cols-viewport");
    for (let i = 0; i < 10; i++) {
      el.scrollLeft += 300;
      await new Promise((r) => requestAnimationFrame(r));
    }
  });
  const endH = performance.now();
  console.log(`🕒 Horizontal scroll time: ${(endH - startH).toFixed(1)} ms`);

  // --- Resize first column ---
  console.log("📏 Resizing first column...");
  const startResize = performance.now();
  await page.evaluate(async () => {
    const resizeHandle = document.querySelector("albert-worksheet-mfe-ng").shadowRoot
      .querySelector(".ag-header-cell-resize");
    if (resizeHandle) {
      const rect = resizeHandle.getBoundingClientRect();
      const mouseMove = (dx) => {
        const evt = new MouseEvent("mousemove", { clientX: rect.left + dx, bubbles: true });
        resizeHandle.dispatchEvent(evt);
      };
      resizeHandle.dispatchEvent(new MouseEvent("mousedown", { clientX: rect.left }));
      mouseMove(120);
      resizeHandle.dispatchEvent(new MouseEvent("mouseup", { clientX: rect.left + 120 }));
    }
  });
  const endResize = performance.now();
  console.log(`🕒 Column resize time: ${(endResize - startResize).toFixed(1)} ms`);

  // --- Drag & drop first row ---
  console.log("🪶 Dragging a row...");
  const startDrag = performance.now();
  await page.evaluate(async () => {
    const rowEls = document.querySelector("albert-worksheet-mfe-ng").shadowRoot.querySelectorAll(".ag-row");
    if (rowEls.length > 1) {
      const rect = rowEls[0].getBoundingClientRect();
      const target = rowEls[5].getBoundingClientRect();
      const mouseDown = new MouseEvent("mousedown", { clientY: rect.top + 5, bubbles: true });
      const mouseMove = new MouseEvent("mousemove", { clientY: target.top + 5, bubbles: true });
      const mouseUp = new MouseEvent("mouseup", { clientY: target.top + 5, bubbles: true });
      rowEls[0].dispatchEvent(mouseDown);
      rowEls[0].dispatchEvent(mouseMove);
      rowEls[5].dispatchEvent(mouseUp);
    }
  });
  const endDrag = performance.now();
  console.log(`🕒 Row drag time: ${(endDrag - startDrag).toFixed(1)} ms`);

  // --- Collect metrics ---
  const metrics = await page.metrics();
  const perfEntries = await page.evaluate(() => window._perfData);

  const results = {
    Timestamp: new Date().toISOString(),
    RenderTimeMs: renderTime.toFixed(1),
    VerticalScrollMs: (endV - startV).toFixed(1),
    HorizontalScrollMs: (endH - startH).toFixed(1),
    ResizeMs: (endResize - startResize).toFixed(1),
    DragMs: (endDrag - startDrag).toFixed(1),
    Metrics: metrics,
    PaintEvents: perfEntries.filter(e => e.entryType === 'paint'),
  };

  fs.writeFileSync("puppeteer-interactions.json", JSON.stringify(results, null, 2));
  console.log("📊 Interaction metrics written to puppeteer-interactions.json");

  await browser.close();
})();
