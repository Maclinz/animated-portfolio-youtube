"use client";
import React from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/app/utils/globalContext";

function Menu() {
  const context = useGlobalContext();
  const { toggle, handleToggle } = context;

  const menuVariants = {
    visible: {
      x: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      display: "block", // Set display to "block" when visible
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hidden: {
      x: 500,
      scaleX: 0.5,
      scaleY: 0.2,
      transition: {
        type: "ease",
        stiffness: 200,
        damping: 30,
      },
      transitionEnd: {
        display: "none", // Set display to "none" after the transition
      },
    },
  };
  return (
    <motion.div
      className="menu"
      initial="hidden"
      variants={menuVariants}
      animate={toggle ? "visible" : "hidden"}
    >
      <div className="buttons">
        <Button
          text="Close"
          bg="white"
          modifier="red"
          hover="true"
          onClick={handleToggle}
        />
        <Button
          text="Email me!"
          bg="white"
          onClick={() => {
            window.location.href = "mailto:maclinzuniversal@gmail.com";
          }}
          padding=".8rem 2.5rem"
          hover="true"
          modifier="purple"
        />
        <Button
          text="Book a Meeting"
          bg="#ff3860"
          onClick={() => {
            window.location.href = "mailto:maclinzuniversal@gmail.com";
          }}
          modifier="white"
          padding=".8rem 2.5rem"
          hover="true"
        />
      </div>
    </motion.div>
  );
}

export default Menu;
