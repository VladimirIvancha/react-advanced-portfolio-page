import React from "react";
import {
  portfolioInitialDataEn,
  portfolioInitialDataRu,
  portfolioTitleEn,
  portfolioTitleRU,
} from "../../utils/initialData";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

function MyPortfolio({ isEnLangActive }) {
  const data = !isEnLangActive
    ? portfolioInitialDataRu
    : portfolioInitialDataEn;
  const title = !isEnLangActive ? portfolioTitleRU : portfolioTitleEn;

  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="boxes">
          {data.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
          {console.log(data.reverse())}
        </div>
      </div>
    </section>
  );
}

export default MyPortfolio;
