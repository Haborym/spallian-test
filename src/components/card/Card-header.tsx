import React, { ReactNode } from "react";

interface CardHeaderProps {
  children?: ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className="card-header">
      <p>This is a Card Header</p>
      {children}
    </div>
  );
};
