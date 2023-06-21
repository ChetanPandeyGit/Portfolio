import React from "react";
import p1 from "./../Assets/1.png";
import p2 from "./../Assets/2.png";
import p3 from "./../Assets/3.png";
import p4 from "./../Assets/4.png";
import "../Styles/Project.css";

const Project = () => {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Here you will find some of the personal projects that I created for
            learning purpose.
          </span>
        </h2>
        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={p1}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Coding Ninjas Clone</h3>
              <p class="projects__row-content-desc">
                Coding Ninjas Web application is almost an exact clone of Coding
                Ninjas Website with functionalities ample to showcase my
                expertise in MERN Stack
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                rel="noreferrer"
                href="https://codingninjasclonefrontend.onrender.com/"
                target="_blank"
              >
                Open Link
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={p2}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">iSHOP</h3>
              <p class="projects__row-content-desc">
                Ishop is web application is somewhat a generic E-Commerce
                Website with Cart, Login and Payment functionalities.
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                rel="noreferrer"
                href="https://endearing-capybara-adc485.netlify.app/"
                target="_blank"
              >
                Open Link
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={p3}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">The Siren</h3>
              <p class="projects__row-content-desc">
               The Siren is a Blog post app where admin can post the latest news
                related to Bollywood, Hollywood, Technology, Fitness &amp; Science.
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                rel="noreferrer"
                href="https://react-blog-frontend-d27q.onrender.com/"
                target="_blank"
              >
                Open Link
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={p4}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">To Do App</h3>
              <p class="projects__row-content-desc">
                Todo List is a app build in JavaScript where user can add all
                task he needs to do. Further, he can add multiple
                sub task in list. Upon completion of any task he can mark that
                particular task as completed. 
              </p>
              <a
                class="btn btn--med btn--theme dynamicBgClr"
                rel="noreferrer"
                href="https://chetanpandeygit.github.io/To-Do-JS-App"
                target="_blank"
              >
                Open Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
