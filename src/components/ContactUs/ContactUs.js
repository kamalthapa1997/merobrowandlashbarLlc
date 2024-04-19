import Treatmentnavlists from "../Treatmentnavlists/Treatmentnavlists";
import { useState } from "react";
import storyImg from "../../images/contactus.jpg";
import Transition from "../Hooks/Transition";

import "./ContactUs.css";

const ContactUs = () => {
  const phoneNumber = "+1234567890";
  const emailAddress = "example@example.com";
  return (
    <div className="contactus">
      <div className="contactus__paragraph">
        <h2 className="contactus__heading">
          <Transition>
            <span>
              Contact <br /> Us /{" "}
            </span>
          </Transition>
        </h2>

        <div className="contactus__details">
          <Transition>
            <p className="contactus__texts">
              Welcome to our hassle-free online booking section! We've
              simplified the process with three distinct options for your
              convenience. Click "Lash" to explore our lash extension services,
              "Eyebrow" for a list of eyebrow treatments, and "Other" for a peek
              at additional services. Streamlined and user-friendly, making
              appointments has never been this easy!
            </p>

            <div className="contactus__detail">
              <div className="contactus__addresses">
                <p className="contactus__text"> OUR ADDRESS</p>
                <p className="contactus__text">
                  4206 QueensBury Rd.
                  <br />
                  Hyattsville, MD 20781 <br />
                </p>
                <p className="contactus__text">
                  <a className="contactus__link" href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                  </a>
                </p>
                <p className="contactus__text">
                  <a
                    className="contactus__link"
                    href={`mailto:${emailAddress}`}
                  >
                    {emailAddress}
                  </a>
                </p>
              </div>

              <div className="contactus__addresses ">
                <p className="contactus__text"> OPENING HOURS</p>
                <p className="contactus__text">Tue-Sun: 10am - 8pm</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <img src={storyImg} className="contactus__img" alt="Eyelash Story"></img>
      <iframe
        title="Google Maps Embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.657353024408!2d-77.09485661893669!3d38.983252860668124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c9aef323ad73%3A0x7c746ccf9194a21d!2sMero%20brow%20and%20lash%20bar%20Llc!5e0!3m2!1sen!2sus!4v1709005489311!5m2!1sen!2sus"
        className="contactus__map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* <div>Images</div> */}
    </div>
  );
};

export default ContactUs;
