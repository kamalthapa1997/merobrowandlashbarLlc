// import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import React from "react";
import Transition from "../Hooks/Transition";
import "./OurStory.css";
import apple from "../../images/social/apple.webp";
import kxa from "../../images/social/kxa.webp";
import foam from "../../images/social/foam.webp";

const OurStory = () => {
  return (
    <div className="treatments">
      <div className="ourstory__paragraph">
        <h2 className="treatments__heading">
          <Transition>
            Our <br /> Story /{" "}
          </Transition>
        </h2>

        <p className="ourstory__texts">
          Mero Brow and Lash Bar Llc is dedicated to enhancing your natural
          beauty through expertly applied eyelash extensions.
          <br /> <br /> Our skilled professionals are committed to providing a
          personalized experience, ensuring you leave feeling glamorous and
          confident.
        </p>
      </div>
      <div className="ourstory__imgs">
        <img src={kxa} alt="imgs" />
        <div className="ourstory__img">
          <img src={foam} alt="imgs" />
          <img src={apple} alt="imgs" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
