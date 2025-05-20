import React from "react";
import {  ParticlesBounce } from "tsparticles-engine";
import bannerImg from "../../assets/images/banner.gif"

const HomeComp = () => {
    return(
   <>
        <div className="banner">
                <div className="container">
                      <div className="row .banner-info">
                      <div className="col-12 col-lg-6">
                          <div className="banner-img">
                                <img src={bannerImg} alt="" />
                          </div>
                         </div>
                      </div>
                </div>
        </div>
   </>
    )
};


export default HomeComp;


    //      <ParticlesBounce
    //   id="tsparticles"
    //   init={particlesInit}
    //   options={{
    //     fullScreen: { enable: true },
    //     particles: {
    //       number: { value: 50 },
    //       color: { value: "#ffffff" },
    //       shape: { type: "circle" },
    //       opacity: { value: 0.5 },
    //       size: { value: 3 },
    //       move: { enable: true, speed: 2 },
    //     },
    //     interactivity: {
    //       events: {
    //         onHover: { enable: true, mode: "repulse" },
    //       },
    //     },
    //     background: {
    //       color: "#000000",
    //     },
    //   }}
    //   />