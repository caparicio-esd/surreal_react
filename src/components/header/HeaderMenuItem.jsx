import classNames from "classnames";
import React, { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import {
  headerMenuItem,
  headerMenuItemActive,
} from "./HeaderMenuItem.module.sass";

const HeaderMenuItem = ({ children, ...props }) => {
  const { active, index} = props;
  const { setMenuItemsActiveIndex} = useContext(HeaderContext);

  const headerItemClasses = classNames(headerMenuItem, {
    [`${headerMenuItemActive}`]: active,
  });
  return <div onMouseEnter={() => setMenuItemsActiveIndex(index)} className={headerItemClasses}>{children}</div>;
};

export default HeaderMenuItem;
