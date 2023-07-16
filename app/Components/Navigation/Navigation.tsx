"use client";

import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import menuItems from "@/app/utils/menuItems";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "@/app/utils/animation";
import { useGlobalContext } from "@/app/utils/globalContext";

function Navigation() {
  const [activeNav, setActiveNav] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(0);

  const context = useGlobalContext();
  const { handleToggle } = context;

  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="nav-items">
        <Image
          src="/logo.png"
          alt="logo"
          width={45}
          height={45}
          style={{
            objectFit: "contain",
            backgroundColor: "#f2f6ff",
            borderRadius: "50%",
            padding: ".3rem",
          }}
        />

        {menuItems.map((item, index: number) => {
          return (
            <li
              key={item.id}
              className={`nav-items__item ${
                activeMenu === index && "active-menu"
              }`}
              onClick={() => {
                setActiveMenu(index);
              }}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <Button
        text="Contact"
        bg="#A855F7"
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
        onClick={handleToggle}
      />
    </motion.nav>
  );
}

export default Navigation;
