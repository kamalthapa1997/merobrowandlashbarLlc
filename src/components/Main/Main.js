import React from "react";
import { motion } from "framer-motion";
import profilelogo from "../../images/logo.png";
import "./Main.css";

export const Main = () => {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const fallDown = {
    initial: {
      y: -300,
      opacity: 0,
    },
    enter: {
      y: 150,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: -300,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="main">
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
        exit={{ opacity: 0, x: 20 }}
        key="profile-logo"
        className="main__profile-logo"
        src={profilelogo}
        alt="profile"
      />
    </div>
  );
};
