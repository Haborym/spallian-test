import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/search",
        element: <p>Searching space</p>,
      },
      {
        path: "/options",
        element: <p>Options page</p>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
