import React from "react";
import about from "../../assets/images/about.jpg";
import { aboutMeInitialDataRu, aboutMeInitialDataEn } from "../../utils/initialData";

function AboutMe({isEnLangActive}) {
    const data = !isEnLangActive ? aboutMeInitialDataRu : aboutMeInitialDataEn;

  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title">
          <span>{data.title}</span>
        </div>
        <div className="about-details">
          <div className="left">
            <img src={about} alt="" />
          </div>
          <div className="right">
            <div className="topic">{data.subtitle}</div>
            <p>{data.text}</p>
            <div className="button">
              <button>{data.btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
