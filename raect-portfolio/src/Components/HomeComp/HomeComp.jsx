import React from "react";
import AboutComp from "../AboutComp/AboutComp";
import Projects from "../Projects/Projectcomp";
import Skills from "../Skills/SkillCom";
import ContactComp from "../ContactComp/ContactComp";
import Faq from "../FAQComp/FAQComp";
import "./homeComp.css";
import ScrollFade from "../ScrollFade"; 

const HomeComp = () => {
  return (
    <div className="BG">
      <div className="banner">
        <div className="container">
          <div className="row align-items-center banner-wrapper">
            <div className="col-12 text-center banner-content">
              <ScrollFade direction="down">
                <h1>
                  Hi, I'm <span>Jenish</span>
                </h1>
                <p>MERN Stack Developer</p>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>

        <ScrollFade direction="up">
          <AboutComp />
        </ScrollFade>

        <ScrollFade direction="left">
          <Skills />
        </ScrollFade>

        <ScrollFade direction="right">
          <Projects />
        </ScrollFade>

        <ScrollFade direction="up">
          <Faq />
        </ScrollFade>

        <ScrollFade direction="up">
          <ContactComp />
        </ScrollFade>
    </div>
  );
};

export default HomeComp;
