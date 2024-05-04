import React, { ReactNode } from "react";
import { Header } from "./components/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
};
