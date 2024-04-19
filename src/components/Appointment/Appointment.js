import { useEffect, useState } from "react";
import "./Appointment.css";

import SquareAppointment from "../SquareAppointment/SquareAppointment";
export const Appointment = () => {
  const [showAppointments, setShowAppointments] = useState(false);
  const handleBookNowClick = () => {
    // Toggle the state to show or hide the Square Appointments component
    setShowAppointments((prevShowAppointments) => !prevShowAppointments);
  };

  useEffect(() => {
    // we should define the handler inside `useEffect`, so that it wouldn’t lose the reference to be able to remove it
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowAppointments(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    // don’t forget to remove the listener in the `clean-up` function
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showAppointments]);

  return (
    <div className="services__book">
      <button
        // onClick={handleBookNowClick}
        type="button"
        className="services__booknow"
      >
        BOOK NOW
      </button>

      {/* {showAppointments && <SquareAppointment />} */}
    </div>
  );
};
