"use client";
import { Portfolio } from "@/app/utils/portfolios";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import {
  gridItemVariants,
  hoverVariants,
  hoverVariants2,
} from "@/app/utils/animation";

function PortfolioItem({ name, image, categories, onClick }: Portfolio) {
  const [isHover, setIsHover] = React.useState(false);

  const handleHoverStart = () => {
    setIsHover(true);
    console.log("hover");
  };

  const handleHoverEnd = () => {
    setIsHover(false);
    console.log("hover end");
  };

  return (
    <motion.div
      className="portfolio"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={onClick}
      variants={gridItemVariants}
    >
      <Image src={image} alt={name} />
      <div className="hover">
        <motion.div
          className="hover__categories"
          initial="hidden"
          variants={hoverVariants}
          animate={isHover ? "visible" : "hidden"}
        >
          {categories.map((category) => {
            return <span key={category}>{category}</span>;
          })}
        </motion.div>
        <motion.p
          className="hover__title"
          initial="hidden"
          variants={hoverVariants2}
          animate={isHover ? "visible" : "hidden"}
        >
          {name}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default PortfolioItem;
