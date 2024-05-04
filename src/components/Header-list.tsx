import React from "react";
import { HeaderItem } from "./Header-item";

import { navigation } from "../utils/navigation";

export const HeaderList = () => {
  return (
    <div className="header-list">
      {navigation &&
        navigation.map((el) => {
          return <HeaderItem name={el.name} link={el.link} key={el.link} />;
        })}
    </div>
  );
};
