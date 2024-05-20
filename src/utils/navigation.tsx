import React from "react";

import { HomePage } from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout";
import { RouteError } from "../components/errors/Route-error";
export const navigation = [
  {
    name: "Home",
    link: "/",
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
    ],
    errorElement: <RouteError />,
  },
]);
