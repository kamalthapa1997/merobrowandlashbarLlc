import React, { useContext, useEffect, useCallback, useMemo } from "react";
import "./Calender.css";
import dayjs from "dayjs";
import {
  add,
  format,
  startOfDay,
  isBefore,
  setHours,
  setMinutes,
} from "date-fns";
import CurrentAppointmentContext from "../Context/CurrentAppointmentContext";
import CurrentDateContext from "../Context/CurrentDateContext";
import CurrentValueContext from "../Context/CurrentValueContext";
// import CurrentBookingContext from "../Context/CurrentBookingContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import BookingDetails from "../BookingDetails/BookingDetails";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Calender = ({ handleAppointmentDate }) => {
  // const [activeBooking, setActiveBooking] = useState("bookingopen");
  const currentAppointment = useContext(CurrentAppointmentContext);
  // const currentBooking = useContext(CurrentBookingContext);
  const CurrentValue = useContext(CurrentValueContext);
  const CurrentDate = useContext(CurrentDateContext);
  const { date, setDate } = CurrentDate;
  // const { setActiveBooking } = currentBooking;
  const todaysDate = new Date();
  const currentHour = todaysDate.getHours();
  const currentMinute = todaysDate.getMinutes();

  const setValue = CurrentValue.setValues;
  const value = CurrentValue.values;

  const selectedItem = currentAppointment.selectedItem;

  useEffect(() => {
    // Save selected date to localStorage whenever it changes
    localStorage.setItem("selectedDate", value.toDate());
  }, [value]);

  useEffect(() => {
    // Save date and time to localStorage whenever they change
    localStorage.setItem("justDate", date.justDate);
    localStorage.setItem("dateTime", date.dateTime);

    // Check if date.justDate is in the past

    const justDate = new Date(date.justDate);

    if (justDate < todaysDate) {
      localStorage.removeItem("justDate");
    } else {
      localStorage.setItem("justDate", date.justDate);
    }
  }, [date.justDate, date.dateTime]);

  useEffect(() => {
    const times = getTimes(date.justDate);
    setDate((prevDate) => ({ ...prevDate, times: times }));
  }, [date.justDate, setDate]);

  const goBack = () => {
    window.history.back();
  };

  const getTimes = (selectedDate) => {
    let beginning = startOfDay(todaysDate);
    let end = add(beginning, { hours: 10 }); // Set end time to 10 hours later

    if (dayjs(selectedDate).isSame(todaysDate, "day")) {
      if (currentHour >= 10 && currentHour < 20) {
        // Check if the current minute is less than 30

        if (currentMinute < 30) {
          // Set beginning to the current hour + 30 minutes

          beginning = add(beginning, { hours: currentHour });

          beginning = add(beginning, {
            minutes: 30,
          });
        } else {
          // Set beginning to the next hour

          beginning = add(beginning, { hours: currentHour + 1 });
          beginning = setMinutes(beginning, 0); // Set minutes to 00
        }
        // Set end time to 8:00 PM
        end = setHours(end, 20); // Change to 20 for 8:00 PM
        end = setMinutes(end, 0); // Set minutes to 00
      } else if (currentHour >= 20 && currentHour < 24) {
        beginning = 0;
        end = 0;
      } else {
        beginning = setHours(beginning, 10); // Set beginning to 10:00 AM
        end = add(beginning, { hours: 10 }); // Set end to 8:00 PM
      }
    } else {
      beginning = setHours(beginning, 10); // Set beginning to 10:00 AM
      beginning = setMinutes(beginning, 0); // Set minutes to 00
      end = add(beginning, { hours: 10 }); // Set end to 8:00 PM
    }

    const interval = 30;
    const times = [];

    for (
      let i = beginning;
      isBefore(i, end);
      i = add(i, { minutes: interval })
    ) {
      times.push(format(i, "HH:mm")); // Using "HH:mm" format specifier
    }

    return times;
  };

  const handleDateChange = useCallback(
    (newValue) => {
      const justDate = newValue.$d;
      const formattedDate = justDate ? format(justDate, "yyyy-MM-dd") : null;
      const defaultTime = "10:00";

      setDate((prevDate) => ({
        justDate: formattedDate,
        dateTime: prevDate.dateTime || defaultTime, // Keep default time if already set
      }));
      setValue(newValue);
    },
    [setDate, setValue]
  );

  const timeButtons = useMemo(() => {
    if (!date.times) return null;

    if (date.times.length === 0) {
      return <div>Please Check Next Availability</div>;
    }

    const handleTimeButtonClick = (time) => {
      setDate((prev) => ({ ...prev, dateTime: time }));
    };

    return date.times.map((time, i) => (
      <button
        key={`time-${i}`}
        className={`calender__time-btn ${
          time === date.dateTime ? "calender__current-time" : ""
        }`}
        type="button"
        onClick={() => handleTimeButtonClick(time)}
      >
        {time}
      </button>
    ));
  }, [date.times, date.dateTime, setDate]);

  const dateTimeDisplay = useMemo(() => {
    if (!date.times || date.times.length === 0) return null;

    return "notnull";
    //   <p className="calender__service-date-time">{`
    //   ${value.format("MMMM")} ${value.$D}, ${value.$y}  at ${
    //     date.dateTime || "10:00"
    //   }
    // `}</p>
  }, [date.dateTime, date.times, value]);

  const disableBtn =
    dateTimeDisplay === null ? "calender__service-diasable" : "";

  const handleAppointmentSubmit = () => {
    if (value && date) {
      localStorage.setItem("appointmentValue", JSON.stringify(value));
      localStorage.setItem("appointmentDate", JSON.stringify(date));
      console.log(
        ` ${value.format("MMMM")} ${value.$D}, ${value.$y}   ${date.dateTime}`
      );

      handleAppointmentDate(value, date);
    } else {
      console.log("none");
    }
  };

  return (
    <div className="calender">
      <div className="calender__paragraph">
        <button onClick={goBack} className="calender__back-btn">
          {" "}
          <span className="calender__back-symbol"> &lt; </span> Back{" "}
        </button>
        <p className="calender__title">{selectedItem.title}</p>
        <p className="calender__text">
          Checkout our availability and book the date and time that works for
          you
        </p>
      </div>
      <div className="calender__appointments-details">
        <p className="calender__appointments-texts"> Select a Date and Time</p>
        <span className="calender__appointments-line"></span>
        <div className="calender__details">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              openTo="day"
              orientation="portrait"
              value={value}
              onChange={handleDateChange}
              renderInput={null}
              disablePast
            />
          </LocalizationProvider>
          <div className="calender__time ">{timeButtons}</div>

          <div>
            <BookingDetails />

            <Link className="calender__btn-link" to="/clientdetails">
              <button
                onClick={handleAppointmentSubmit}
                type="button"
                className={`calender__btn ${disableBtn}`}
                disabled={dateTimeDisplay === null}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
