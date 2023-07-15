"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  logo?: string;
  title?: string;
  description?: string;
  links?: string[];
  background?: string;
}

function ContactBanner({
  logo = "/logo.png",
  title,
  description,
  links = ["Home", "About", "Contact"],
  background = "linear-gradient(90deg, #A855F7 60%, #7263F3 100%)",
}: Props) {
  const contactBannerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.3,
      filter: "blur(10px)",
      x: -300,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: "blur(0px)",
      x: 0,

      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="contact-banner"
      variants={contactBannerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        background: background,
      }}
    >
      <div className="contact-banner__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-banner__title">
        <h1>{title}</h1>
      </div>
      <div className="contact-banner__description">
        <p>{description}</p>
      </div>
      <div className="contact-banner__links">
        {links?.map((link) => {
          return (
            <a href="#" key={link}>
              {link}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}

export default ContactBanner;
