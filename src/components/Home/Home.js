import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transition from "../Hooks/Transition";

// import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Aboutus } from "../Aboutus/Aboutus";
import { Services } from "../Services/Services";
import { Social } from "../Social/Social";

import React, { useEffect, useRef } from "react";

function Home() {
  const main = useRef();
  const smoother = useRef(null);

  return (
    <Transition>
      <div className="home">
        <Main className="mainhome" />
        <Aboutus />
        <Services />
        <Social className="social" />
        {/* <Footer /> */}
      </div>
    </Transition>
  );
}

export default Home;
