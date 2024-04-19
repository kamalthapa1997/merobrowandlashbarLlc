// import logo from "./logo.svg";
import "./App.css";
// import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import Treatments from "../Treatments/Treatments";

import Home from "../Home/Home";
import CurrentLocationContext from "../Context/CurrentLocationContext";
import CurrentAppointmentContext from "../Context/CurrentAppointmentContext";
import CurrentDateContext from "../Context/CurrentDateContext";
import CurrentValueContext from "../Context/CurrentValueContext";
import CurrentBookingContext from "../Context/CurrentBookingContext";
import React, { useEffect, useRef, useState } from "react";
// import ImageUploadModal from "../Tests/MainComponent";
import OurStory from "../OusStory/OurStory";
import ContactUs from "../ContactUs/ContactUs";
import LoginModal from "../LoginModal/LoginModal";
import Calender from "../Calender/Calender";
import AddServiceModal from "../AddServiceModal/AddServiceModal";
import ClientDetails from "../ClientDetails/ClientDetails";
import dayjs from "dayjs";
import { format } from "date-fns";

// import { Footer } from "../Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [activeBooking, setActiveBooking] = useState(false);
  const [addService, setAddService] = useState("");

  const [selectedItem, setSelectedItem] = useState(
    JSON.parse(localStorage.getItem("selectedItem")) || null
  );
  const [values, setValues] = useState(() => {
    // Get the value from localStorage or use the current date
    const savedDate = localStorage.getItem("selectedDate");
    return dayjs(savedDate || new Date());
  });
  const [date, setDate] = useState(() => {
    // Get the value from localStorage or set default values
    const savedJustDate = localStorage.getItem("justDate");
    const savedDateTime = localStorage.getItem("dateTime");
    return {
      justDate: savedJustDate || format(new Date(), "yyyy-MM-dd"),
      dateTime: savedDateTime || null,
    };
  });

  const app = useRef();

  const location = useLocation();

  const [currentPage, SetCurrentPage] = useState(
    localStorage.getItem("currentPage") || location.pathname
  );

  const handleAppointment = (item) => () => {
    setSelectedItem(item);
  };
  useEffect(() => {
    localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
    // localStorage.setItem("selectedDate", JSON.stringify(date));
  }, [selectedItem]);
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    SetCurrentPage(location.pathname);
  }, [location.pathname]);

  ////------LOGIN MODAL------/////////

  const handleLoginModal = () => {
    setActiveModal("userLogin");
  };

  const handleModalClose = () => {
    setActiveModal("");
    setAddService("");
  };

  const handleAddService = () => {
    setAddService("addservicemodal");
  };

  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    date: ` ${values.format("MMMM")} ${values.$D}, ${values.$y}`,
    time: date.dateTime,
    messages: "",
  });

  // useEffect(() => {
  //   const storedAppointmentValue = localStorage.getItem("appointmentValue");
  //   const storedAppointmentDate = JSON.parse(
  //     localStorage.getItem("appointmentDate")
  //   );

  //   if (storedAppointmentValue && storedAppointmentDate) {
  //     const formattedDate = new Date(storedAppointmentValue).toLocaleDateString(
  //       "en-US",
  //       {
  //         month: "long",
  //         day: "numeric",
  //         year: "numeric",
  //       }
  //     );

  //     setAppointmentDetails({
  //       ...appointmentDetails,
  //       date: formattedDate,
  //       time: storedAppointmentDate.dateTime,
  //     });
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem(
  //     "appointmentDetails",
  //     JSON.stringify(appointmentDetails)
  //   );
  // }, [appointmentDetails]);

  // useEffect(() => {
  //   // Check if appointmentDetails exist in local storage before setting it
  //   const storedAppointmentDetails = JSON.parse(
  //     localStorage.getItem("appointmentDetails")
  //   );
  //   if (storedAppointmentDetails) {
  //     setAppointmentDetails(storedAppointmentDetails);
  //   }
  // }, []);

  console.log(appointmentDetails);
  const handleClientValues = (values) => {
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      messages: values.message || "",
    }));
  };

  const handleAppointmentDate = (value, date) => {
    // console.log(
    //   ` ${value.format("MMMM")} ${value.$D}, ${value.$y}   ${date.dateTime}`
    // );
    console.log("\\\\", value, date);
    // setAppointmentDetails((prevDetails) => ({
    //   ...prevDetails,
    //   date: value.format("MMMM D, YYYY"),
    //   time: date.dateTime,
    // }));
  };

  ///////--------//////////

  return (
    <div ref={app} className="App">
      <CurrentValueContext.Provider value={{ values, setValues }}>
        <CurrentDateContext.Provider value={{ date, setDate }}>
          <CurrentLocationContext.Provider
            value={{ currentPage, SetCurrentPage }}
          >
            <CurrentAppointmentContext.Provider
              value={{ selectedItem, setSelectedItem }}
            >
              <CurrentBookingContext.Provider
                value={{ activeBooking, setActiveBooking }}
              >
                <Header handleLoginModal={handleLoginModal} />

                <Routes location={location} key={location.pathname}>
                  <Route index element={<Home />}></Route>

                  <Route
                    handleAppointment={handleAppointment}
                    path="/treatments"
                    element={<Treatments handleAddService={handleAddService} />}
                  />

                  <Route path="ourstory" element={<OurStory />} />
                  <Route path="contactus" element={<ContactUs />} />
                  <Route
                    path="appointment"
                    element={
                      <Calender handleAppointmentDate={handleAppointmentDate} />
                    }
                  />

                  <Route
                    path="/clientdetails"
                    element={
                      <ClientDetails handleClientValues={handleClientValues} />
                    }
                  />
                </Routes>
                {activeModal === "userLogin" && (
                  <LoginModal handleModalClose={handleModalClose} />
                )}
                {addService === "addservicemodal" && (
                  <AddServiceModal
                    addService={addService}
                    handleModalClose={handleModalClose}
                  />
                )}

                {/* <Footer /> */}
                {/* <ImageUploadModal /> */}
              </CurrentBookingContext.Provider>
            </CurrentAppointmentContext.Provider>
          </CurrentLocationContext.Provider>
        </CurrentDateContext.Provider>
      </CurrentValueContext.Provider>
    </div>
  );
}

export default App;
