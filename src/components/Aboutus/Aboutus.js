import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Aboutus.css";

import eyelashmain from "../../images/eee.jpg";
import mainthread from "../../images/thread.jpg";

import useScrollAnimation from "../Hooks/useScrollAnimation";

export const Aboutus = () => {
  const aboutusRef = useRef(null);
  const controls = useScrollAnimation(
    aboutusRef,
    { opacity: 1, y: 0 },
    {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.3 },
    }
  );

  return (
    <motion.section
      className="aboutus"
      ref={aboutusRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <img className="aboutus__lashimg" src={eyelashmain} alt="Eyelash"></img>
      <motion.div className="aboutus__infos">
        <div className="aboutus__details">
          <p className="aboutus__text ">WELCOME TO</p>
          <h1 className="aboutus__text-title">Mero Brow & Lash Bar</h1>
          <p className="aboutus__texts">
            Welcome to Mero Brow & Lash Bar Your Premier Beauty Destination! we
            specialize in enhancing your natural beauty with precision and care.
            Our expert team is dedicated to providing top-notch eyebrow
            threading and eyelash services, among many other beauty treatments
            that will leave you looking and feeling your absolute best. Why
            Threading ? • Less Irritation • Suitable for Sensitive Skin • No
            risk of burns • Precise Control of Shape • Suitable for Short hairs
          </p>
        </div>
        <img
          className="aboutus__threadimg"
          src={mainthread}
          alt="Eyebrow Threading"
        ></img>
      </motion.div>
    </motion.section>
  );
};
