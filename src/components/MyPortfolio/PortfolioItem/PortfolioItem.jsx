import React from "react";

function PortfolioItem({ item }) {
  return (
    <div className="box">
      <div className="icon">
        <i className={item.iconClass}></i>
      </div>
      <div className="topic">{item.title}</div>
      <p>{item.text}</p>
      <div className="portfolioWebsite__portfolio-wrapper">
        <button className="portfolioWebsite__portfolio-btn">
          <a className="portfolioWebsite__portfolio-link" href={item.gitLink} target="_blank">
            {item.btnGitText}
          </a>
        </button>
        <button className="portfolioWebsite__portfolio-btn">
          <a className="portfolioWebsite__portfolio-link" href={item.siteLink} target="_blank">
            {item.btnSiteText}
          </a>
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
