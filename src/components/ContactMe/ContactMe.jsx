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
          <p>{data.text}</p>
          <div className="button">
            <button>{data.btnText}</button>
          </div>
          <div className="media-icons">
            <a className="contact__links" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="contact__links" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="contact__links" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
