import "./Social.css";
import followinsta from "../../images/social/followinsta.jpg";
import beauty from "../../images/social/beauty.jpg";

import equip from "../../images/social/equip.jpg";
import hennadesign from "../../images/social/hennadesign.jpg";
import lashequip from "../../images/social/lashequip.jpg";

export const Social = () => {
  return (
    <div className=" social">
      <div className="social__items">
        <div className="social__followus">
          <p className="social__links">
            FOLLOW US ON <br />
            <span className="social__instagram">
              INSTA- <br /> GRAM!{" "}
            </span>
          </p>
          <img
            className="social__image-beauty"
            src={followinsta}
            alt="sicial"
          />
        </div>
        <div className="social__gallery">
          <img
            className="social__image-hennadesign"
            src={hennadesign}
            alt="hennadesign"
          />
          <img
            className="social__image-lashequip"
            src={lashequip}
            alt="lashequip"
          />
          <div className="social__imgs">
            <img className="social__image-equip" src={equip} alt="equip" />

            <img className="social__image-equip" src={beauty} alt="equip" />
          </div>

          <p className="social__contact">
            {" "}
            /Get in <br /> Touch
          </p>
        </div>
      </div>
    </div>
  );
};
