"use client";
import Banner from "./Components/Banners/Banner";
import PortfolioItem from "./Components/PortfolioItem/PortfolioItem";
import Portfolios from "./Components/Portfolios";
import ContactBanner from "./Components/Banners/ContactBanner";
import { portfolios } from "./utils/portfolios";
import { motion } from "framer-motion";

export default function Home() {
  // mini portfolio animation
  const portfolioVariants = {
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
    <main className="u-pad-2">
      <Portfolios />
      <Banner
        color="white"
        text="Interested in working with me on your next project? Send me an email or schedule a meeting."
        button
      />
      <motion.div
        className="mini-portfolios"
        variants={portfolioVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolios.slice(-4).map((portfolio) => {
          return (
            <PortfolioItem
              key={portfolio.id}
              name={portfolio.name}
              image={portfolio.image}
              url={portfolio.url}
              categories={portfolio.categories}
            />
          );
        })}
      </motion.div>

      <Banner
        background="white"
        shadow
        color="#6366F1"
        text="I am a tech-savvy individual leading a design and web development studio dedicated to providing comprehensive digital solutions."
      />

      <ContactBanner />
    </main>
  );
}
