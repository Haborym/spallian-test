import React, { ReactNode } from "react";

interface ErrorLayoutProps {
  children: ReactNode;
}

export const ErrorLayout = ({ children }: ErrorLayoutProps) => {
  // TODO give a proper css to the layout and the childrens
  return <div className="container">{children}</div>;
};
