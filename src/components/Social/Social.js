import "./Social.css";
import { motion, useAnimation } from "framer-motion";

import followinsta from "../../images/social/followinsta.jpg";
import beauty from "../../images/social/beauty.jpg";

import equip from "../../images/social/equip.jpg";
import hennadesign from "../../images/social/hennadesign.jpg";
import lashequip from "../../images/social/lashequip.jpg";
import { useEffect, useRef } from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";

export const Social = () => {
  const socialRef = useRef(null);
  const controls = useScrollAnimation(
    socialRef,
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
      id="social"
      ref={socialRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className=" social"
    >
      <div className="social__items">
        <div className="box social__followus">
          <p className="social__links">
            FOLLOW US ON <br />
            <span className="social__instagram">
              INSTA- <br /> GRAM!{" "}
            </span>
          </p>
          <img
            className=" social__image-beauty"
            src={followinsta}
            alt="sicial"
          />
        </div>
        <div className="social__gallery">
          <img
            className="box social__image-hennadesign"
            src={hennadesign}
            alt="hennadesign"
          />
          <img
            className="box social__image-lashequip"
            src={lashequip}
            alt="lashequip"
          />
          <div className=" social__imgs">
            <img className="box social__image-equip" src={equip} alt="equip" />

            <img className="box social__image-equip" src={beauty} alt="equip" />
          </div>

          <p className="social__contact">
            {" "}
            /Get in <br /> Touch
          </p>
        </div>
      </div>
    </motion.div>
  );
};
