"use client";
import React from "react";
import { portfolios } from "../utils/portfolios";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { gridVariants } from "../utils/animation";

function Portfolios() {
  const router = useRouter();

  const MemoizedPortfolioItem = React.memo(PortfolioItem);

  return (
    <motion.div
      className="portfolios"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {portfolios.map((portfolio) => {
        return (
          <MemoizedPortfolioItem
            key={portfolio.id}
            name={portfolio.name}
            image={portfolio.image}
            url={portfolio.url}
            categories={portfolio.categories}
            onClick={() => {
              router.push(`/portfolio/${portfolio.url}`);
            }}
          />
        );
      })}
    </motion.div>
  );
}

export default Portfolios;
