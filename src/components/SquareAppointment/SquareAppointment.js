import "./SquareAppointment.css";
import React from "react";
import { Helmet } from "react-helmet";

const SquareAppointment = () => {
  return (
    <div className="squareappointments">
      <iframe
        className="squareappointments__iframe"
        key="square"
        title="square"
        src="https://squareup.com/appointments/book/qsq55wbkhksqjt/LX84C87YJHGBC/start"
      />
    </div>
  );
};

export default SquareAppointment;
