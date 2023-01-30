import React from "react";

function NavMenuItem({item, handleCancelBtnClick}) {
  return (
    <li>
      <a href={item.link} onClick={handleCancelBtnClick}>
        {item.title}
      </a>
    </li>
  );
}

export default NavMenuItem;
