import "./Header.css";
import { Link } from "react-router-dom";
import { Context, useContext } from "react";

import profilelogo from "../../images/profilelogo.svg";
import { useState } from "react";

import CurrentLocationContext from "../Context/CurrentLocationContext";
export const Header = () => {
  const [headerPosition, setHeaderPosition] = useState(false);

  const currentPage = useContext(CurrentLocationContext);

  const getTextColorClass = (page) => {
    console.log(currentPage.currentPage === page ? "header__text" : "");
    return currentPage.currentPage === page ? "header__text" : "";
  };

  // console.log("======", getTextColorClass("/"));
  // console.log(getTextColorClass("/treatment"));

  return (
    <div className="header">
      <nav className="header__navlists">
        <div className="header__navlist-items">
          <li className={`header__navlist `}>
            {" "}
            <Link
              className={`header__navlink ${getTextColorClass("/")}`}
              to="/"
            >
              Home{" "}
            </Link>
          </li>

          {/* <Link className="header__navlink" to="/treatments"> */}

          <li className={`header__navlist`}>
            {" "}
            <Link
              className={`header__navlink ${getTextColorClass("/treatments")}`}
              to="/treatments"
            >
              Treatments{" "}
            </Link>
          </li>
          {/* </Link> */}
          <li className="header__navlist">
            <Link to="/ourstory">Our story</Link>{" "}
          </li>
          <li className="header__navlist">
            {" "}
            <Link to="/contactus">Contact us</Link>{" "}
          </li>
        </div>
        <div className="header__btns">
          <button type="button" className="header__booknow">
            BOOK NOW
          </button>
          <p className="header__login">
            Log In{" "}
            <img
              className="header__profile-logo"
              src={profilelogo}
              alt="profile"
            />
          </p>
        </div>
      </nav>
    </div>
  );
};
