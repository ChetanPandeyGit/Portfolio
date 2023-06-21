import React, { useState } from "react";
import "./../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [DynamicClassNameMCA, setDynamicClassNameMCA] = useState("more");
  const [DynamicClassNameBCA, setDynamicClassNameBCA] = useState("more");
  const [DynamicClassNameXII, setDynamicClassNameXII] = useState("more");
  const [DynamicClassNameX, setDynamicClassNameX] = useState("more");

  const changeClassNameMCA = () => {
    setDynamicClassNameMCA("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[0].style.display = "none";
  };
  const changeClassNameBCA = () => {
    setDynamicClassNameBCA("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[1].style.display = "none";
  };
  const changeClassNameXII = () => {
    setDynamicClassNameXII("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[2].style.display = "none";
  };
  const changeClassNameX = () => {
    setDynamicClassNameX("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[3].style.display = "none";
  };

  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Fullstack Web Developer</strong> building the
                Front-end and Back-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the
                <strong> Projects</strong> section.
              </p>

              <p class="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact </strong> me.
              </p>
            </div>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">Node JS</div>
              <div class="skills__skill">Express JS</div>
              <div class="skills__skill">React JS</div>
              <div class="skills__skill">Redux Toolkit</div>
              <div class="skills__skill">Git</div>
              <div class="skills__skill">Mongo DB</div>
            </div>
          </div>
        </div>

        <div class=" timeline-container ">
          <h3 className="about__content-title">Education</h3>
          <div class="timeliner timeline-block">
            <div class="timeline-icon ">
              <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameMCA} className="more-trigger">
                <i class="fa fa-chevron-down"></i>
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>MCA</h2>
              <div className={DynamicClassNameMCA}>
                <p>
                  <ul>
                    <li>
                      I've completed my Post Graduation from{" "}
                      <b>Graphic Era Hill University, Dehradun</b> in year 2022 with 8.3/10 CGPA 
                    </li>
                    <li>I've complete my Master`s in Computer Applications</li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Sep 2020 - Aug 2022</span>
            </div>

            <div class="timeline-icon position">
              <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameBCA} className="more-trigger">
                <i class="fa fa-chevron-down"></i>
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>BCA</h2>
              <div className={DynamicClassNameBCA}>
                <p>
                  <ul>
                    <li>
                      I've completed my Graduation from{" "}
                      <b>Uttaranchal University, Dehradun</b> in year 2020 with 7.4/10 CGPA
                    </li>
                    <li>
                      I've complete my Bachelor`s in Computer Applications
                    </li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Sep 2017 - May 2020</span>
            </div>

            <div class="timeline-icon position">
              <FontAwesomeIcon icon="fa-solid fa-school" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameXII} className="more-trigger">
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>HSC (XII)</h2>
              <div className={DynamicClassNameXII}>
                <p>
                  <ul>
                    <li>
                      I've completed my Higher Secondary school from{" "}
                      <b>Beersheba Senior Secondary School, Almora</b> in year with 54.6% 
                      2017
                    </li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">April 2016 - April 2017</span>
            </div>

            <div class="timeline-icon position">
              <FontAwesomeIcon icon="fa-solid fa-school" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameX} className="more-trigger">
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>SSC (X)</h2>
              <div className={DynamicClassNameX}>
                <p>
                  <ul>
                    <li>
                      I've completed my Secondary school from{" "}
                      <b>Beersheba Senior Secondary School, Almora</b> in year with 8.4 CGPA
                      2015
                    </li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">April 2014 - April 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
