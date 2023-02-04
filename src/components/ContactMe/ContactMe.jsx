import React from "react";
import {
  contactMeInitialDataEn,
  contactMeInitialDataRu,
} from "../../utils/initialData";

function ContactMe({ isEnLangActive }) {
  const data = !isEnLangActive
    ? contactMeInitialDataRu
    : contactMeInitialDataEn;

  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>{data.title}</span>
        </div>
        <div className="text">
          <div className="topic">{data.subtitle}</div>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <div className="button">
            <a href="mailto:Vladimir.Ivancha@mail.ru">
              <button>{data.btnText}</button>
            </a>
          </div>
          <div className="media-icons">
            <a
              className="contact__links"
              href="https://vk.com/vladimirivancha"
              target="_blank"
            >
              <i className="fa-brands fa-vk"></i>
            </a>
            <a
              className="contact__links"
              href="https://telegram.me/VladimirIvancha"
              target="_blank"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              className="contact__links"
              href="https://www.linkedin.com/in/vladimir-ivancha"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
