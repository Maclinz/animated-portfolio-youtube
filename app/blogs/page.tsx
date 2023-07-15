"use client";

import React from "react";
import ContactBanner from "../Components/Banners/ContactBanner";
import Banner from "../Components/Banners/Banner";
import { blogs } from "../utils/blogs";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { gridItemVariants, gridVariants } from "../utils/animation";

function BlogsPage() {
  const router = useRouter();

  return (
    <div className="u-pad-2">
      <motion.div
        className="blogs"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog, index: number) => {
          return (
            <motion.div
              key={index}
              className="blog"
              variants={gridItemVariants}
              onClick={() => {
                router.push(
                  `/blog/${blog.title
                    ?.replace(/:/g, "")
                    .split(" ")
                    .join("-")
                    .toLocaleLowerCase()}`
                );
              }}
            >
              <div className="blog__image">
                {blog.image && <Image src={blog.image} alt="blog" />}
              </div>
              <h4 className="blog__title">{blog.title}</h4>
            </motion.div>
          );
        })}
      </motion.div>
      <Banner
        color="white"
        button
        text="Interested in working with me on your next project? Send me an email or schedule a meeting."
      />

      <ContactBanner />
    </div>
  );
}

export default BlogsPage;
