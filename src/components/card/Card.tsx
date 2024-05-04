import React from "react";
import { CardHeader } from "./Card-header";
import { CardBody } from "./Card-body";
import { CardFooter } from "./Card-footer";

export const Card = () => {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};
