import React from "react";
import AboutComp from "../AboutComp/AboutComp";
import Projects from "../Projects/Projectcomp";
import Skills from "../Skills/SkillCom";
import ContactComp from "../ContactComp/ContactComp";
import Faq from "../FAQComp/FAQComp";
import "./homeComp.css";
import { TypeAnimation } from 'react-type-animation';
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
            Hi, I'm{' '}
            <TypeAnimation
              sequence={[
                '𝕁𝔼ℕ𝕀𝕊ℍ',
                2000,
                'a Coder',
                2000,
                'a Developer',
                2000,
                '𝕁𝔼ℕ𝕀𝕊ℍ',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block', color: '#007bff' }}
            />
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
