import React, { useContext } from "react";
import {
  header,
  headerContent,
  headerLogo,
  headerNav,
  headerMenu,
  headerCtas,
} from "./Header.module.sass";
import HeaderMenuItem from "./HeaderMenuItem";
import Button from "../global/Button/Button";
import { HeaderContext } from "../../contexts/HeaderContext";

const Header = () => {
  const { logo, menuItems, ctas } = useContext(HeaderContext)

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
                active={menuItem.active}
                index={i}
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
