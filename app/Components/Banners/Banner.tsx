"use client";
import React from "react";
import Button from "../Button/Button";
import { bannerVariants } from "@/app/utils/animation";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/app/utils/globalContext";

interface Props {
  text: string;
  button?: boolean;
  background?: string;
  shadow?: boolean;
  color?: string;
}

function Banner({
  text,
  button,
  background = "radial-gradient(80.97% 80.37% at 56.01% 19.03%, #9759F5 0%, #7263F3 99.23%)",
  shadow,
  color,
}: Props) {
  const context = useGlobalContext();
  return (
    <motion.div
      className="banner"
      variants={bannerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
      style={{
        background,
        boxShadow: shadow ? "0px 2px 10px rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <p
        className="banner__text"
        style={{
          color,
        }}
      >
        {text}
      </p>
      {button && (
        <Button
          text="Contact Us"
          bg="white"
          padding="1.2rem 2rem"
          hover="true"
          onClick={context.handleToggle}
        />
      )}
    </motion.div>
  );
}

export default Banner;
