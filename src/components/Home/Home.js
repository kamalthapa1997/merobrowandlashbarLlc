import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Aboutus } from "../Aboutus/Aboutus";
import { Services } from "../Services/Services";
import { Social } from "../Social/Social";

function Home() {
  return (
    <div className="home">
      <Main />
      <Aboutus />
      <Services />
      <Social />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
