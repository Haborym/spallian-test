import React from "react";

import { HomePage } from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout";
import { RouteError } from "../components/errors/Route-error";
import { SearchPage } from "../pages/Search";
import { OptionsPage } from "../pages/Options";
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
        element: <HomePage />,
        index: true,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/options",
        element: <OptionsPage />,
      },
    ],
    errorElement: <RouteError />,
  },
]);
