"use client";
import { portfolios } from "@/app/utils/portfolios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  headerImgVariants,
  overlayVariants,
  titleVariants2,
} from "@/app/utils/animation";
interface Params {
  params: {
    portfolioName: string;
  };
}

function page({ params }: Params) {
  const portfolio = portfolios.find((portfolio) => {
    return portfolio.url === params.portfolioName;
  });

  const {
    name,
    image,
    categories,
    content,
    features,
    problem,
    solution,
    links,
  } = portfolio || {};

  const { description, image1, image2, image3, image4, image5 } = content || {};

  return (
    <section className="project">
      <div className="project__header">
        <motion.img
          className="bg-image"
          src={image?.src}
          variants={headerImgVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
        <motion.div
          className="banner"
          variants={titleVariants2}
          initial="offscreen"
          animate="onscreen"
        >
          <div className="banner__header">
            <h1 className="banner__title">{name}</h1>
            <div className="banner__categories">
              {categories?.map((category: any, index: number) => {
                return (
                  <span key={index} className="banner__category">
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
          <p className="banner__text">{description}</p>
        </motion.div>
      </div>
      <div className="project__content">
        <div className="project__content__intro">
          {features && (
            <ul className="features">
              <h4>Features</h4>
              {features?.map((feature: any, i: number) => {
                return <li key={i}>{feature}</li>;
              })}
            </ul>
          )}

          {solution && (
            <div className="solution">
              {problem && (
                <div
                  className="problem"
                  style={{
                    marginBottom: "2rem",
                  }}
                >
                  <h4>Problem</h4>
                  <p>{problem}</p>
                </div>
              )}

              <h4>Solution</h4>
              <p>{solution}</p>
            </div>
          )}

          {links && (
            <div className="links">
              <h4>Project Links</h4>
              {links.github && <Link href={links.github}>Github Repo</Link>}
              {links.website && (
                <Link href={links.website}>www.snippetmaster.com</Link>
              )}
            </div>
          )}
        </div>
        <div className="horizontal-images u-pad-2">
          {image2 && <Image src={image2} alt="" />}
          {image3 && <Image src={image3} alt="" />}
        </div>
        <div className="horizontal-images--fullscreen">
          {image1 && <Image src={image1} alt="" />}
          {image4 && <Image src={image4} alt="" />}
        </div>
      </div>
    </section>
  );
}

export default page;
