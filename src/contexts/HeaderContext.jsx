import headerModel from "./../models/header.json";
import { createContext, useState } from "react";

// init data
export const HeaderContext = createContext({...headerModel});

export const HeaderContextProvider = ({ children }) => {
  // not reactive data
  const { logo, ctas } = headerModel;
  
  // reactive data
  const [menuItems, setMenuItems] = useState(headerModel.menuItems);

  // reactive data changers
  const setMenuItemsActiveIndex = (index) => {
    const _menuItems = [...menuItems];
    const oldIndex = _menuItems.findIndex((mItem) => mItem.active);
    _menuItems[oldIndex].active = false;
    _menuItems[index].active = true;
    setMenuItems(_menuItems);
  };

  // values to make visible
  const value = { logo, menuItems, ctas, setMenuItemsActiveIndex };

  // always like that
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
