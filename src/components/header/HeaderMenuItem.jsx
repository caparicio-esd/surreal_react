import classNames from "classnames";
import React from "react";
import {
  headerMenuItem,
  headerMenuItemActive,
} from "./HeaderMenuItem.module.sass";

const HeaderMenuItem = ({ children, ...props }) => {
  const { active, updateActiveIndex, index } = props;
  const headerItemClasses = classNames(headerMenuItem, {
    [`${headerMenuItemActive}`]: active,
  });
  return (
    <div onClick={() => updateActiveIndex(index)} className={headerItemClasses}>
      {children}
    </div>
  );
};

export default HeaderMenuItem;
