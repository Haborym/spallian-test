import React from "react";
import "./styles.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./utils/navigation";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
