import "./Services.css";
import { Appointment } from "../Appointment/Appointment";

export const Services = () => {
  return (
    <div className="services__items">
      <div className=" services__treatments">
        <p className="services__title"> OUR TREATMENTS</p>

        <div className="services__lists">
          <div className="services__item">
            <p className="services__titles">
              {" "}
              <span className="services__num">01 /</span> <br /> Eye <br /> Lash
            </p>
            {/* <img className="services__img" src={henna} alt="henna" /> */}
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
    </div>
  );
};
