import React, { useState, useEffect } from "react";
import about from "../../assets/images/about.jpg";

function App() {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(true);

  const mainClass = `portfolioWebsite ${
    isNavBarOpen && isMobile && "portfolioWebsite_active"
  }`;
  const navBarClass = `navbar ${isNavBarOpen && isMobile && "active"}`;
  const menuBtnClass = `menu-btn ${
    isNavBarOpen && isMobile && "menu-btn_active"
  }`;
  const scrollBtnLinkClass = `scroll-button-link ${
    isNavBarOpen && isMobile && "scroll-button-link_active"
  } ${scrolledDown && "scroll-button-link_sticky"}`;
  const menuBtnBGClass = `portfolioWebsite__sidebar ${
    isNavBarOpen && isMobile && "portfolioWebsite__sidebar_opened"
  }`;
  const scrollBtnClass = `portfolioWebsite__navigation-menu ${
    scrolledDown && "sticky"
  }`;

  function handleResize() {
    if (window.innerWidth > 750) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };
  }, []);

  function handleMenuBtnClick() {
    setNavBarOpen(true);
  }

  function handleCancelBtnClick() {
    setNavBarOpen(false);
  }

  function handleMouseClick(evt) {
    if (evt.target.classList.contains("portfolioWebsite__sidebar_opened")) {
      handleCancelBtnClick();
    }
  }

  return (
    <div className={mainClass} onMouseDown={handleMouseClick}>
      {/* Move to up button */}
      <div className="scroll-button">
        <a className={scrollBtnLinkClass} href="#home">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
      {/* navgaition menu */}
      <nav className={scrollBtnClass}>
        <div className={navBarClass}>
          <div className="logo">
            <a href="#">Portfolio.</a>
          </div>
          <div className={menuBtnBGClass}>
            <ul className="menu">
              <li>
                <a href="#home" onClick={handleCancelBtnClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleCancelBtnClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleCancelBtnClick}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleCancelBtnClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleCancelBtnClick}>
                  Contact
                </a>
              </li>
              <div className="cancel-btn" onClick={handleCancelBtnClick}>
                <i className="fas fa-times"></i>
              </div>
            </ul>
          </div>
          <div className="media-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={menuBtnClass} onClick={handleMenuBtnClick}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      {/* Home Section Start */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Prem Shahi</div>
            <div className="text-three">UI/UX Designer</div>
            <div className="text-four">From Nepal</div>
          </div>
          <div className="button">
            <button>Hire Me</button>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src={about} alt="" />
            </div>
            <div className="right">
              <div className="topic">Designing Is My Passion</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, porro veritatis pariatur, nobis voluptatem ipsum
                repellat nemo quisquam error reprehenderit recusandae odio vel,
                suscipit. Voluptas mollitia accusantium quaerat aspernatur
                labore dolorum placeat ipsa sint nam perspiciatis eos
                consectetur veritatis debitis, quis aliquam unde sed maiores
                sit! Hic molestiae optio iste iure earum amet nostrum quaerat
                facere quae veniam maiores harum iusto aperiam vel inventore
                illo voluptatibus voluptates quo impedit voluptatum error vitae,
                omnis praesentium? Aperiam nulla non, nesciunt fuga rem
                perferendis alias et, temporibus, distinctio culpa unde a
                laborum libero ducimus. Facilis veniam sit praesentium,
                voluptatibus sint maxime iusto eaque.
              </p>
              <div className="button">
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skill Section Start */}
      {/* Section Tag and Other Div will same where we need to put same CSS */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
              <div className="experience">
                <div className="num">10</div>
                <div className="exp">
                  Years Of <br /> Experience
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
                <div className="topic">PHP</div>
                <div className="per">60%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Services Section Start */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Services</span>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="topic">Web Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="topic">Graphic Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="topic">Digital Marketing</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fab fa-android"></i>
              </div>
              <div className="topic">Icon Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-camera-retro"></i>
              </div>
              <div className="topic">Photography</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fas fa-tablet-alt"></i>
              </div>
              <div className="topic">Apps Devlopment</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia autem quam odio, qui voluptatem eligendi?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me section Start */}
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">
            <span>Contact Me</span>
          </div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              neque ipsum corrupti dolores, facere numquam voluptate aspernatur
              sit perferendis qui nisi modi! Recusandae deserunt consequatur
              voluptatibus alias repellendus nobis eligendi.
            </p>
            <div className="button">
              <button>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section Start */}
      <footer>
        <div className="text">
          <span>
            Created By <a href="#">CodingLab</a> | &#169; 2021 All Rights
            Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
