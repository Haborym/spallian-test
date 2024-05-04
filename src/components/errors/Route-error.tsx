import React from "react";
import { ErrorLayout } from "./layout";
import { Link } from "react-router-dom";

export const RouteError = () => {
  return (
    <ErrorLayout>
      <p>The URL does not exist please return to the Home page</p>
      <Link className="header-list-item" to="/">
        Home
      </Link>
    </ErrorLayout>
  );
};
