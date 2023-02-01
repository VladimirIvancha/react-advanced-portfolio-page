import React, { useState, useEffect } from "react";

import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import MoveToUpBtn from "../MoveToUpBtn/MoveToUpBtn";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import MySkills from "../MySkills/MySkills";
import NavMenu from "../NavMenu/NavMenu";

function App() {
  // Стейты
  const [isDarkThemeActive, setDarkThemeActive] = useState(false);
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(true);
  const [isEnLangActive, setEnLang] = useState(false);

  // Классы
  const mainClass = `portfolioWebsite ${
    isNavBarOpen && isMobile && "portfolioWebsite_active"
  } ${isDarkThemeActive && "portfolioWebsite_theme-dark"}`;

  // Реакции на события
  // Реакции на изменение разрешения экрана
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  // Реакции на скролл
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };
  }, []);

  // Функции
  function handleResize() {
    if (window.innerWidth > 750) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  function handleCancelBtnClick() {
    setNavBarOpen(false);
  }
  function handleMouseClick(evt) {
    if (evt.target.classList.contains("portfolioWebsite__sidebar_opened")) {
      handleCancelBtnClick();
    }
  }

  return (
    <div className={mainClass} onMouseDown={handleMouseClick}>
      {/* Move to up button */}
      <MoveToUpBtn
        isNavBarOpen={isNavBarOpen}
        isMobile={isMobile}
        scrolledDown={scrolledDown}
      />

      {/* navgaition menu */}
      <NavMenu
        isDarkThemeActive={isDarkThemeActive}
        setDarkThemeActive={setDarkThemeActive}
        isNavBarOpen={isNavBarOpen}
        isMobile={isMobile}
        scrolledDown={scrolledDown}
        setNavBarOpen={setNavBarOpen}
        handleCancelBtnClick={handleCancelBtnClick}
        isEnLangActive={isEnLangActive}
        setEnLang={setEnLang}
      />

      {/* Home Section Start */}
      <Home isEnLangActive={isEnLangActive} />

      {/* About Section Start */}
      <AboutMe isEnLangActive={isEnLangActive} />

      {/* My Skill Section Start */}
      {/* Section Tag and Other Div will same where we need to put same CSS */}
      <MySkills isEnLangActive={isEnLangActive} />

      {/* My Services Section Start */}
      <MyPortfolio isEnLangActive={isEnLangActive} />

      {/* Contact Me section Start */}
      <ContactMe isEnLangActive={isEnLangActive} />

      {/* Footer Section Start */}
      <Footer />
    </div>
  );
}

export default App;
