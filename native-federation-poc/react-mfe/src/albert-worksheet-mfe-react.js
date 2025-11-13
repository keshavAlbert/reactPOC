import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

class AlbertWorksheetMFEReact extends HTMLElement {
  constructor() {
    super();
    // Create shadow root
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Create container inside shadow root
    const mountPoint = document.createElement("div");
    mountPoint.id = "react-mfe-root";
    this.shadowRoot.appendChild(mountPoint);

    // Mount React app inside shadow DOM
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<App />);
  }
}

// Register the custom element
customElements.define("albert-worksheet-mfe-react", AlbertWorksheetMFEReact);
