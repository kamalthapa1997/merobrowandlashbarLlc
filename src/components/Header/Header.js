import "./Header.css";
import { Link } from "react-router-dom";
// import gsap from "gsap";

import profilelogo from "../../images/profilelogo.svg";
import { useContext } from "react";

import CurrentLocationContext from "../Context/CurrentLocationContext";
export const Header = ({ handleLoginModal }) => {
  const currentPage = useContext(CurrentLocationContext);

  ///////// ======>>>>>>>>>>>>

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Treatments", path: "/treatments" },
    { title: "Our Story", path: "/ourstory" },
    { title: "Contact Us", path: "/contactus" },
  ];

  const getTextColorClass = (page) => {
    return currentPage.currentPage === page ? "header__text" : "";
  };

  return (
    <div className="header">
      <nav className="header__navlists">
        <div className="header__navlist-items">
          {navItems.map((item, index) => (
            <li key={index} className="header__navlist">
              <Link
                className={`header__navlink ${getTextColorClass(item.path)}`}
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </div>
        <div className="header__btns">
          <button className="header__booknow" type="button">
            BOOK NOW
          </button>

          <button
            onClick={handleLoginModal}
            className="header__login"
            type="button"
          >
            Log In
            <img
              className="header__profile-logo"
              src={profilelogo}
              alt="profile"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};
