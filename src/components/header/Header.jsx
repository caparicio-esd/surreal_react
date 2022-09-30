import React, { useState } from "react";
import {
  header,
  headerContent,
  headerLogo,
  headerNav,
  headerMenu,
  headerCtas,
} from "./Header.module.sass";
import { logo, menuItems, ctas } from "./../../models/header.json";
import HeaderMenuItem from "./HeaderMenuItem";
import Button from "../global/Button/Button";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <header className={header} id="header">
      <div className={headerContent}>
        <div className={headerLogo}>
          <img
            src={logo.url}
            alt={logo.alt}
            title={logo.title}
            height={logo.height}
          />
        </div>
        <nav className={headerNav}>
          <ul className={headerMenu}>
            {menuItems.map((menuItem, i) => (
              <HeaderMenuItem
                key={menuItem.id}
                setActiveIndex={setActiveIndex}
                index={i}
                active={activeIndex == i}
              >
                {menuItem.label}
              </HeaderMenuItem>
            ))}
          </ul>
          <div className={headerCtas}>
            {ctas.map((cta, i) => (
              <Button key={i} {...cta}>
                {cta.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
