import React from "react";
import {
    darkTheme,
    lightTheme,
  navInitialDataEn,
  navInitialDataRu,
  navMenuInitialDataEn,
  navMenuInitialDataRu,
} from "../../utils/initialData";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

function NavMenu({
  isDarkThemeActive,
  setDarkThemeActive,
  isNavBarOpen,
  isMobile,
  scrolledDown,
  setNavBarOpen,
  handleCancelBtnClick,
  isEnLangActive,
  setEnLang,
}) {
  const mainData = !isEnLangActive ? navInitialDataRu : navInitialDataEn;
  const data = !isEnLangActive ? navMenuInitialDataRu : navMenuInitialDataEn;
  const lightData = !isDarkThemeActive ? lightTheme : darkTheme;

  const scrollBtnClass = `portfolioWebsite__navigation-menu ${
    scrolledDown && "portfolioWebsite__navigation-menu_sticky"
  }`;
  const navBarClass = `navbar ${isNavBarOpen && isMobile && "active"}`;
  const menuBtnBGClass = `portfolioWebsite__sidebar ${
    isNavBarOpen && isMobile && "portfolioWebsite__sidebar_opened"
  }`;
  const menuBtnClass = `menu-btn ${
    isNavBarOpen && isMobile && "menu-btn_active"
  }`;

  function handleMenuBtnClick() {
    setNavBarOpen(true);
  }
  function handleThemeChange() {
    setDarkThemeActive(!isDarkThemeActive);
  }
  function handleLangChange() {
    setEnLang(!isEnLangActive);
  }

  return (
    <nav className={scrollBtnClass}>
      <div className={navBarClass}>
        <div className="logo">
          <a href="#">{mainData.title}</a>
        </div>
        <div className={menuBtnBGClass}>
          <ul className="menu">
            {data.map((item) => (
              <NavMenuItem
                key={item.id}
                item={item}
                handleCancelBtnClick={handleCancelBtnClick}
              />
            ))}
          </ul>
        </div>
        <div className="media-icons">
          <a className="portfolioWebsite__navigation-menu-link" href="#" onClick={handleLangChange}>
            <p>{mainData.lang}</p>
          </a>
          <a className="portfolioWebsite__navigation-menu-link" href="#" onClick={handleThemeChange}>
            <i className={lightData.iconClass}></i>
          </a>
        </div>
      </div>
      <div className={menuBtnClass} onClick={handleMenuBtnClick}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default NavMenu;
