import React from "react";

interface HeaderItemProps {
  name: string;
  link: string;
}

export const HeaderItem = ({ name, link }: HeaderItemProps) => {
  return (
    <a href={link} className="header-list-item">
      {name}
    </a>
  );
};
