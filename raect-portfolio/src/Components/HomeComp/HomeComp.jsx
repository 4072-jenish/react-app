import AboutComp from "../AboutComp/AboutComp";
import Projects from "../Projects/Projectcomp";
import Skills from "../Skills/SkillCom";
import "./homeComp.css";
import banner from "../../assets/images/bannerImg.png";
import React from "react";
import ContactComp from "../ContactComp/ContactComp";
import Faq from "../FAQComp/FAQComp";

const HomeComp = () => {
  return (
    <div className="BG">
      <div id="particles-js"></div>

      <div className="banner">
        <div className="container">
          <div className="row align-items-center banner-wrapper">
            <div className="col-12 col-md-6 text-center text-md-start banner-content">
              <h1>
                Hi, I'm <span>Jenish</span>
              </h1>
              <p>MERN Stack Developer</p>
            </div>

            <div className="col-12 col-md-6 text-center bannerImg">
              <img
                src={banner}
                alt="Developer"
                className="img-fluid rounded-circle dev-image"
              />
            </div>
          </div>
        </div>
      </div>

      <AboutComp />
      <Skills />
      <Projects />
      <Faq/>
      <ContactComp/>
    </div>
  );
};

export default HomeComp;
