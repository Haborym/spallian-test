import React, { ReactNode } from "react";

interface CardHeaderProps {
  children?: ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="card-header">{children}</div>;
};
