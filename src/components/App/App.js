// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import Treatments from "../Treatments/Treatments";

import Home from "../Home/Home";
import CurrentLocationContext from "../Context/CurrentLocationContext";
import { useEffect, useRef, useState } from "react";
// import ImageUploadModal from "../Tests/MainComponent";
import OurStory from "../OusStory/OurStory";
import ContactUs from "../ContactUs/ContactUs";
import { AnimatePresence } from "framer-motion";

// import { Footer } from "../Footer/Footer";

function App() {
  const app = useRef();
  const scrollContainer = useRef();

  const location = useLocation();

  const [currentPage, SetCurrentPage] = useState(
    localStorage.getItem("currentPage") || location.pathname
  );

  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    SetCurrentPage(location.pathname);
  }, [location.pathname]);
  console.log(currentPage);

  ////------------/////////

  ///////--------//////////

  return (
    <div ref={app} className="App">
      <CurrentLocationContext.Provider value={{ currentPage, SetCurrentPage }}>
        <Header />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />}></Route>

            <Route path="/treatments" element={<Treatments />} />

            <Route path="ourstory" element={<OurStory />} />
            <Route path="contactus" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>

        {/* <Footer /> */}
        {/* <ImageUploadModal /> */}
      </CurrentLocationContext.Provider>
    </div>
  );
}

export default App;
