"use client";
import React from "react";

import { motion, useSpring, useScroll } from "framer-motion";

function Progressbar() {
  const scrollYProgress = useScroll().scrollYProgress;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX,
      }}
    ></motion.div>
  );
}

export default Progressbar;
