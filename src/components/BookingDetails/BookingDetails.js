import "./BookingDetails.css";
import React, { useContext, useMemo } from "react";
import CurrentAppointmentContext from "../Context/CurrentAppointmentContext";
import PropTypes from "prop-types";

import CurrentDateContext from "../Context/CurrentDateContext";
import CurrentValueContext from "../Context/CurrentValueContext";

const BookingDetails = () => {
  const currentAppointment = useContext(CurrentAppointmentContext);
  const selectedItem = currentAppointment.selectedItem;

  const CurrentValue = useContext(CurrentValueContext);
  const CurrentDate = useContext(CurrentDateContext);
  const { date } = CurrentDate;
  const value = CurrentValue.values;

  const dateTimeDisplay = useMemo(() => {
    if (!date.times || date.times.length === 0) return null;
    return (
      <p className="calender__service-date-time">{`
        ${value.format("MMMM")} ${value.$D}, ${value.$y}  at ${
        date.dateTime || "10:00"
      }
      `}</p>
    );
  }, [value, date.dateTime, date.times]);

  return (
    <div>
      <div className="calender__service-details">
        <p className="calender__service-title">{selectedItem.title}</p>
        <div>{dateTimeDisplay}</div>
        <p className="calender__service-address">Bethesda</p>
        <p className="calender__service-duration">
          {selectedItem.details[0].time}
        </p>
        <p className="calender__service-cost">
          {selectedItem.details[1].money}
        </p>
      </div>
    </div>
  );
};

BookingDetails.propTypes = {
  dateTimeDisplay: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default BookingDetails;
