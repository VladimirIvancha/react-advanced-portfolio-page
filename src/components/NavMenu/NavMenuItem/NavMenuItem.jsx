import React from "react";

function NavMenuItem({item, handleCancelBtnClick}) {
  return (
    <li>
      <a className="portfolioWebsite__navigation-menu-item-link" href={item.link} onClick={handleCancelBtnClick}>
        {item.title}
      </a>
    </li>
  );
}

export default NavMenuItem;
