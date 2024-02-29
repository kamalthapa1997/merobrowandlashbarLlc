import "./Aboutus.css";

// import eyelashmain from "../../images/eyelashmain.jpg";
import eyelashmain from "../../images/eee.jpg";

// import mainthread from "../../images/mainthread.jpg";
import mainthread from "../../images/thread.jpg";

export const Aboutus = () => {
  return (
    <section className="aboutus">
      <img className="aboutus__lashimg" src={eyelashmain} alt="Eyelash"></img>
      <div className="aboutus__infos">
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
      </div>
    </section>
  );
};
