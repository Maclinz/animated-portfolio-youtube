"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  number: string;
  title: string;
  description: string;
}

function StrategyItem({ number, title, description }: Props) {
  const listItem = React.useRef(null);

  const scrollYProgress: any = useScroll({
    target: listItem,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const y = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.li
      ref={listItem}
      className="strategy-item"
      style={{
        y,
        scale,
        opacity,
      }}
    >
      <div className="strategy-item__title">
        <span className="strategy-item__number">{number}</span>
        <span className="strategy-item__text">{title}</span>
      </div>
      <p className="strategy-item__description">{description}</p>
    </motion.li>
  );
}

export default StrategyItem;
