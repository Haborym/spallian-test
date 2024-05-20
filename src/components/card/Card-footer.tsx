import React, { ReactNode } from "react";

interface CardFooterProps {
  children: ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <div className="card-footer">{children}</div>;
};
