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
            <p>{data.text}</p>
            <div className="experience">
              <div className="num">2</div>
              <div className="exp">
                {data.yearsTextBB} <br /> {data.yearsTextAB}
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">HTML</div>
              <div className="per">90%</div>
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              <div className="per">80%</div>
            </div>
            <div className="box">
              <div className="topic">JavScript</div>
              <div className="per">70%</div>
            </div>
            <div className="box">
              <div className="topic">SCSS</div>
              <div className="per">60%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
