import React from "react";

function PortfolioItem({item}) {
  return (
    <div className="box">
      <div className="icon">
        <i className={item.iconClass}></i>
      </div>
      <div className="topic">{item.title}</div>
      <p>{item.text}</p>
    </div>
  );
}

export default PortfolioItem;
