import React from "react";
import { mySkillsInitialDataEn, mySkillsInitialDataRu } from "../../utils/initialData";

function MySkills({isEnLangActive}) {
    const data = !isEnLangActive ? mySkillsInitialDataRu : mySkillsInitialDataEn;

  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title">
          <span>{data.title}</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">{data.subtitle}</div>
            <p>{data.text1}</p>
            <p>{data.text2}</p>
            <div className="experience">
              <div className="num">2</div>
              <div className="exp">
                {data.yearsTextBB} <br /> {data.yearsTextAB}
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">JavScript</div>
              <div className="per">50%</div>
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              <div className="per">26%</div>
            </div>
            <div className="box">
              <div className="topic">HTML</div>
              <div className="per">9%</div>
            </div>
            <div className="box">
              <div className="topic">SCSS</div>
              <div className="per">9%</div>
            </div>
            <div className="box">
              <div className="topic">Kotlin</div>
              <div className="per">6%</div>
            </div>
          </div>
        </div>
        <a className="portfolioWebsite__MySkils_link" href={data.link} target="_blank">{data.linkText}</a>
      </div>
    </section>
  );
}

export default MySkills;
