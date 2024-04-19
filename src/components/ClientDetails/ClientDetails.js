import React, { useContext, useEffect, useState } from "react";
import "./ClientDetails.css";
import { useFormAndValidation } from "../FormValidation/FormAndValidation";
import BookingDetails from "../BookingDetails/BookingDetails";
import CurrentBookingContext from "../Context/CurrentBookingContext";

const ClientDetails = ({ handleClientValues }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const currentBooking = useContext(CurrentBookingContext);
  const { setActiveBooking } = currentBooking;

  const [defaultvalue, setDefaultvalue] = useState({}); // Initialize as an object

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      localStorage.setItem("formData", JSON.stringify(values)); // Corrected line
      handleClientValues(defaultvalue);
      //// VALUES ARE READY
    }
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("formData"));
    if (storedValues) {
      // console.log(storedValues);
      setDefaultvalue(storedValues);
    }
  }, []);

  const goBack = (e) => {
    e.preventDefault(); // Prevent default behavior
    setActiveBooking(false);
    window.history.back();
  };

  return (
    <div className="clientdetails">
      <div className="clientdetails__wrapper">
        <button onClick={goBack} className="clientdetails__back-btn">
          {" "}
          <span className="calender__back-symbol"> &lt; </span> Back{" "}
        </button>
        <div className="clientdetails__wraps">
          <form className="clientdetails__infos">
            <p className="clientdetails__title"> Client Details</p>
            <span className="calender__appointments-line"></span>

            <p className="clientdetails__texts">
              {" "}
              Tell us a bit about yourself
            </p>

            <div className="clientdetails__name-email">
              <div>
                <label className="clientdetails__input-title">
                  name
                  <input
                    className="clientdetails__input"
                    type="text"
                    name="name"
                    minLength={2}
                    placeholder="Enter"
                    id="name"
                    value={values.name}
                    defaultValue={defaultvalue.name || ""}
                    onChange={handleChange}
                    // autoComplete="off"
                    required
                  />
                </label>
                <span className="popupwithform__error">{errors.name}</span>
              </div>
              <div>
                <label className="clientdetails__input-title">
                  Email
                  <input
                    className="clientdetails__input"
                    type="email"
                    name="email"
                    minLength={2}
                    placeholder="Enter"
                    id="email"
                    value={values.email}
                    defaultValue={defaultvalue.email || ""}
                    onChange={handleChange}
                    // autoComplete="off"
                    required
                  />
                </label>
                <span className="popupwithform__error">{errors.email}</span>
              </div>
            </div>
            <div className="clientdetails__num-texts">
              <div>
                <label
                  className="clientdetails__input-title"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  className="clientdetails__input-num"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  defaultValue={defaultvalue.phoneNumber || ""}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  // autoComplete="off"
                  required
                />
                <span className="popupwithform__error">
                  {errors.phoneNumber}
                </span>
              </div>

              <div>
                <label className="clientdetails__input-title" htmlFor="message">
                  Add your message:
                </label>
                <textarea
                  className="clientdetails__input-texts"
                  id="message"
                  name="message"
                  value={values.message}
                  defaultValue={defaultvalue.message || ""}
                  onChange={handleChange}
                  // autoComplete="off"
                ></textarea>
              </div>
            </div>
          </form>

          <div>
            <p> Booking details</p>
            <BookingDetails />
            <button type="button" onClick={handleSubmit} disabled={!isValid}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
