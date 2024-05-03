import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { App } from "./App";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
