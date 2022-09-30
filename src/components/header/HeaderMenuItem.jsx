import classNames from "classnames";
import React from "react";
import {
  headerMenuItem,
  headerMenuItemActive,
} from "./HeaderMenuItem.module.sass";

const HeaderMenuItem = ({ children, ...props }) => {
  const { active, setActiveIndex, index } = props;
  const headerItemClasses = classNames(headerMenuItem, {
    [`${headerMenuItemActive}`]: active,
  });
  return (
    <div onClick={() => setActiveIndex(index)} className={headerItemClasses}>
      {children}
    </div>
  );
};

export default HeaderMenuItem;
