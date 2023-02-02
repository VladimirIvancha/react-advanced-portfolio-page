import React from "react";
import about from "../../assets/images/about.jpg";
import {
  aboutMeInitialDataRu,
  aboutMeInitialDataEn,
} from "../../utils/initialData";

function AboutMe({ isEnLangActive }) {
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
            <p>{data.text1}</p>
            <p>{data.text2}</p>
            <p>{data.text3}</p>
            <p>{data.text4}</p>
            <div className="button">
              <button>
                <a href={data.cvLink} target="_blank">{data.btnText}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
