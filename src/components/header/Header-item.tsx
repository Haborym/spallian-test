import React from "react";
import { Link } from "react-router-dom";

interface HeaderItemProps {
  name: string;
  link: string;
}

export const HeaderItem = ({ name, link }: HeaderItemProps) => {
  return (
    <Link className="header-list-item" to={link}>
      {name}
    </Link>
  );
};
