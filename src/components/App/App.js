// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Treatments } from "../Treatments/Treatments";

import Home from "../Home/Home";
import CurrentLocationContext from "../Context/CurrentLocationContext";
import { useEffect, useState } from "react";
// import ImageUploadModal from "../Tests/MainComponent";
import { OurStory } from "../OusStory/OurStory";
import { ContactUs } from "../ContactUs/ContactUs";

// import { Footer } from "../Footer/Footer";

function App() {
  const location = useLocation();

  const [currentPage, SetCurrentPage] = useState(
    localStorage.getItem("currentPage") || location.pathname
  );
  useEffect(() => {
    localStorage.setItem("currentPage", location.pathname);
    SetCurrentPage(location.pathname);
  }, [location.pathname]);
  console.log(currentPage);

  return (
    <div className="App">
      <CurrentLocationContext.Provider value={{ currentPage, SetCurrentPage }}>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="treatments" element={<Treatments />}></Route>
          <Route path="ourstory" element={<OurStory />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
        </Routes>

        {/* <Footer /> */}
        {/* <ImageUploadModal /> */}
      </CurrentLocationContext.Provider>
    </div>
  );
}

export default App;
