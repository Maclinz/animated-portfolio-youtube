"use client";
import React from "react";
import Banner from "../Components/Banners/Banner";
import ContactBanner from "../Components/Banners/ContactBanner";
import StrategyItem from "../Components/StrategyItem/StrategyItem";

import { motion, useTransform, useScroll } from "framer-motion";
import { bannerVariants, titleVariants } from "../utils/animation";
import { BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

import { Abril_Fatface } from "next/font/google";
import Link from "next/link";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

function AboutPage() {
  const header = React.useRef(null);

  const gradients = [
    "linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))",
    "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
    "linear-gradient(140deg, rgb(89, 212, 153), rgb(160, 135, 45))",
    "linear-gradient(140deg, rgb(76, 200, 200), rgb(32, 32, 51))",
  ];

  const randomGradient = () => {
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  //scroll animations
  const scrollYProgress = useScroll({
    target: header,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]);
  const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]);
  const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -900]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  return (
    <div className="u-pad-2">
      <motion.header
        ref={header}
        className="about-header"
        style={{
          background: randomGradient(),
        }}
      >
        <motion.img
          src="/about.png"
          alt=""
          className="about-header__image"
          variants={bannerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          style={{
            scale,
            translateX: "-50%",
            x,
            y,
            opacity,
          }}
        />
        <motion.div
          className="about-header__content"
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <h1 className={`about-header__title ${abril.className}`}>
            The Code Dealer
          </h1>
          <p>
            I am a full-stack web developer with a passion for building
            beautiful and functional websites.
          </p>
          <div className="icons">
            <Link href="https://www.linkedin.com/">
              <BsLinkedin />
            </Link>
            <Link href="https://github.com/Maclinz">
              <BsGithub />
            </Link>
            <Link href="https://www.youtube.com/@TheCodeDealer/featured">
              <BsYoutube />
            </Link>
          </div>
        </motion.div>
      </motion.header>
      <div className="about-content">
        <Banner
          text="Interested in working with me on your next project? Send me an email or schedule a meeting."
          button
          color="white"
        />

        <section className="strategy-section">
          <motion.h2
            className="strategy-section__title"
            variants={titleVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            Strategy
          </motion.h2>
          <ol className="strategy-section__list">
            <StrategyItem
              number={"01"}
              title="Research"
              description="We start by researching your business and your competitors. We then create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
            <StrategyItem
              number="02"
              title="Discover"
              description="We digest, analyse and challenge the information gathered to reveal strategic insights. They’ll inform the direction of your project and establish the strategic foundations that everything else will be built on."
            />
            <StrategyItem
              number="03"
              title="Plan"
              description="We create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
          </ol>

          <motion.h2
            className="strategy-section__title"
            variants={titleVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            Creative Development
          </motion.h2>
          <ol className="strategy-section__list">
            <StrategyItem
              number="04"
              title="Design"
              description="We create a plan to help you achieve your goals. After the plan is in place, we collaborate closely with you to execute the strategies effectively."
            />
            <StrategyItem
              number="05"
              title="Develop"
              description="Now we’re ready to bring our chosen idea to life. We’ll build it. Refine it. Test it. Tweak it. And test it and tweak it some more. Until it meets our (and your) exceptionally high standards."
            />
            <StrategyItem
              number="06"
              title="Deliver"
              description="The way we see it, our role isn’t over until we’ve supported you to implement and deliver your creative solution. Because we want it to be a success just as much as you do."
            />
          </ol>
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}

export default AboutPage;
