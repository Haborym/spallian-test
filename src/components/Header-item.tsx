import React from "react";
import { Link } from "react-router-dom";

interface HeaderItemProps {
  name: string;
  link: string;
}

export const HeaderItem = ({ name, link }: HeaderItemProps) => {
  return (
    <Link to={link}>{name}</Link>
    // <a href={link} className="header-list-item">
    //   {name}
    // </a>
  );
};
