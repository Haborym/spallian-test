import React, { ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

export const CardBody = ({ children }: CardBodyProps) => {
  return <div className="card-body">{children}</div>;
};
