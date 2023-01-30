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
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(true);

  // Классы
  const mainClass = `portfolioWebsite ${
    isNavBarOpen && isMobile && "portfolioWebsite_active"
  }`;
  
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
        isNavBarOpen={isNavBarOpen}
        isMobile={isMobile}
        scrolledDown={scrolledDown}
        setNavBarOpen={setNavBarOpen}
        handleCancelBtnClick={handleCancelBtnClick}
      />

      {/* Home Section Start */}
      <Home />

      {/* About Section Start */}
      <AboutMe />

      {/* My Skill Section Start */}
      {/* Section Tag and Other Div will same where we need to put same CSS */}
      <MySkills />

      {/* My Services Section Start */}
      <MyPortfolio />

      {/* Contact Me section Start */}
      <ContactMe />

      {/* Footer Section Start */}
      <Footer />
    </div>
  );
}

export default App;
