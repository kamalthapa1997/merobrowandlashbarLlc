import "./Header.css";
import { Link } from "react-router-dom";
import gsap from "gsap";

import profilelogo from "../../images/profilelogo.svg";
import { useState, useRef, Context, useContext, useEffect } from "react";

import CurrentLocationContext from "../Context/CurrentLocationContext";
export const Header = () => {
  const currentPage = useContext(CurrentLocationContext);

  ///////// ======>>>>>>>>>>>>

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Treatments", path: "/treatments" },
    { title: "Our Story", path: "/ourstory" },
    { title: "Contact Us", path: "/contactus" },
  ];
  const buttonData = [
    { text: "BOOK NOW", className: "header__booknow" },
    { text: "Log In", className: "header__login", logoSrc: profilelogo },
  ];

  const getTextColorClass = (page) => {
    return currentPage.currentPage === page ? "header__text" : "";
  };

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".header__navlists", { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

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
          {buttonData.map((button, index) => (
            <button key={index} type="button" className={button.className}>
              {button.text}
              {button.logoSrc && (
                <img
                  className="header__profile-logo"
                  src={button.logoSrc}
                  alt="profile"
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
