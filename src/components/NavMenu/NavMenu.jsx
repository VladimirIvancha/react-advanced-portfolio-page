import React from "react";

function NavMenu({
  isNavBarOpen,
  isMobile,
  scrolledDown,
  setNavBarOpen,
  handleCancelBtnClick,
}) {
  const scrollBtnClass = `portfolioWebsite__navigation-menu ${
    scrolledDown && "sticky"
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

  return (
    <nav className={scrollBtnClass}>
      <div className={navBarClass}>
        <div className="logo">
          <a href="#">Portfolio.</a>
        </div>
        <div className={menuBtnBGClass}>
          <ul className="menu">
            <li>
              <a href="#home" onClick={handleCancelBtnClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleCancelBtnClick}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleCancelBtnClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleCancelBtnClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleCancelBtnClick}>
                Contact
              </a>
            </li>
            <div className="cancel-btn" onClick={handleCancelBtnClick}>
              <i className="fas fa-times"></i>
            </div>
          </ul>
        </div>
        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
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
