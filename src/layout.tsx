import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
