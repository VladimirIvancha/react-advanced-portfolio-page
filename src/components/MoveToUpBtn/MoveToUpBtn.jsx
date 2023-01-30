import React from "react";

function MoveToUpBtn({isNavBarOpen, isMobile, scrolledDown}) {
    const scrollBtnLinkClass = `scroll-button-link ${
        isNavBarOpen && isMobile && "scroll-button-link_active"
      } ${scrolledDown && "scroll-button-link_sticky"}`;

  return (
    <div className="scroll-button">
      <a className={scrollBtnLinkClass} href="#home">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default MoveToUpBtn;
