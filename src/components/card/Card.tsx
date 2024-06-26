import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};
