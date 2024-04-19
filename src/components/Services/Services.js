import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { Appointment } from "../Appointment/Appointment";
// import useScrollAnimation from "../Hooks/useScrollAnimation";
import Transition from "../Hooks/Transition";

export const Services = () => {
  // const eyelashRef = useRef(null);
  // const eyebrowRef = useRef(null);
  // const hennaRef = useRef(null);

  return (
    <motion.div className="services__items">
      <div className=" services__treatments">
        <p className="services__title"> OUR TREATMENTS</p>

        <div className="services__lists">
          <div className="services__item">
            <Transition>
              <motion.p
                // id="services"
                // ref={eyelashRef}
                // initial={{ opacity: 0, y: 40 }}
                // animate={eyelashControls}
                className="services__titles"
              >
                {" "}
                <span className="services__num">01 /</span> <br /> Eye <br />{" "}
                Lash
              </motion.p>
            </Transition>
            <div className="services__img services__eyelash"></div>
          </div>
          <div className="services__item">
            <Transition>
              <motion.p
                // id="services"
                // ref={eyebrowRef}
                // initial={{ opacity: 0, y: 40 }}
                // animate={eyebrowControls}
                className="services__titles"
              >
                {" "}
                <span className="services__num"> 02 /</span> <br /> Eye
                <br /> Brow
              </motion.p>{" "}
            </Transition>
            <div className="services__img services__eyebrow"></div>
          </div>

          <div className="services__item">
            <Transition>
              <p className="services__titles">
                {" "}
                <span className="services__num">03 /</span> <br /> Henna{" "}
              </p>{" "}
            </Transition>
            <div className="services__img services__henna"></div>
          </div>
        </div>
        <Appointment />
      </div>
    </motion.div>
  );
};
