import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout";
import { RouteError } from "./components/errors/Route-error";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        index: true,
      },
      {
        path: "/search",
        element: <p>Searching space</p>,
      },
      {
        path: "/options",
        element: <p>Options page</p>,
      },
    ],
    errorElement: <RouteError />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
