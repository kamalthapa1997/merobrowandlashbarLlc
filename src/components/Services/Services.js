import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Services.css";
import { Appointment } from "../Appointment/Appointment";
import useScrollAnimation from "../Hooks/useScrollAnimation";

export const Services = () => {
  const servicesRef = useRef(null);
  const controls = useScrollAnimation(
    servicesRef,
    { opacity: 1, y: 0 },
    {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.3 },
    }
  );

  return (
    <motion.div
      id="services"
      className="services__items"
      ref={servicesRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <div className=" services__treatments">
        <p className="services__title"> OUR TREATMENTS</p>

        <div className="services__lists">
          <div className="services__item">
            <p className="services__titles">
              {" "}
              <span className="services__num">01 /</span> <br /> Eye <br /> Lash
            </p>
            <div className="services__img services__eyelash"></div>
          </div>
          <div className="services__item">
            <p className="services__titles">
              {" "}
              <span className="services__num"> 02 /</span> <br /> Eye
              <br /> Brow
            </p>{" "}
            <div className="services__img services__eyebrow"></div>
          </div>

          <div className="services__item">
            <p className="services__titles">
              {" "}
              <span className="services__num">03 /</span> <br /> Henna{" "}
            </p>{" "}
            <div className="services__img services__henna"></div>
          </div>
        </div>
        <Appointment />
      </div>
    </motion.div>
  );
};
