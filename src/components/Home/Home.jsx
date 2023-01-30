import React from "react";
import { homeInitialDataEn, homeInitialDataRu } from "../../utils/initialData";

function Home({isEnLangActive}) {
  const data = !isEnLangActive ? homeInitialDataRu : homeInitialDataEn;

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one">{data.greeting}</div>
          <div className="text-two">{data.introducing}</div>
          <div className="text-three">{data.prophecy}</div>
          <div className="text-four">{data.location}</div>
        </div>
        <div className="button">
          <button>{data.btnText}</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
