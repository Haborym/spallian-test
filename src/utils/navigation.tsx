import React from "react";

import "./styles.css";
import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout";
import { RouteError } from "../components/errors/Route-error";
export const navigation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "/search",
  },
  {
    name: "Options",
    link: "/options",
  },
];

export const router = createBrowserRouter([
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
