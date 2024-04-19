import "./Social.css";
// import { motion, useAnimation } from "framer-motion";

import followinsta from "../../images/social/followinsta.jpg";
import beauty from "../../images/social/beauty.jpg";

import equip from "../../images/social/equip.jpg";
import hennadesign from "../../images/social/hennadesign.jpg";
import lashequip from "../../images/social/lashequip.jpg";
import { React } from "react";
import Transition from "../Hooks/Transition";
// import useScrollAnimation from "../Hooks/useScrollAnimation";

export const Social = () => {
  return (
    <div className=" social">
      <div className="social__items">
        <div className="box social__followus">
          <div className="social__links">
            <p className=" social__text">
              FOLLOW US ON <br />
            </p>
            <Transition>
              <p className="social__instagram">
                INSTA- <br /> GRAM!{" "}
              </p>
            </Transition>
          </div>

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

          <div className="social__contact">
            <Transition>
              <p>
                /Get in <br /> Touch
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};
