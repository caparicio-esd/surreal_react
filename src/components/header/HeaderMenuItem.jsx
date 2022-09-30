import classNames from "classnames";
import React from "react";
import {
  headerMenuItem,
  headerMenuItemActive,
} from "./HeaderMenuItem.module.sass";

const HeaderMenuItem = ({ active, children }) => {
  const headerItemClasses = classNames(headerMenuItem, {
    [`${headerMenuItemActive}`]: active,
  });
  return <div className={headerItemClasses}>{children}</div>;
};

export default HeaderMenuItem;
