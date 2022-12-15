"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { navVariants, slideIn } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative noSelect`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="logo text-[24px] leading-[35px] text-white">Shreyash</h2>

        <div className="sm:flex">
          <button
            onClick={handleClick}
            className="sm:hidden inline-flex p-3 hover:rounded text-white ml-auto hover:text-white outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            className={`${
              active ? "" : "hidden"
            }  absolute right-20 top-16 sm:right-0 sm:top-0 sm:relative sm:flex flex-row gap-8 items-center text-white text-md sm:text-sm outline-none`}
          >
            <a href="#projects" className="outline-none active:bg-none">
              <motion.li
                variants={slideIn("left", "spring", 0.2, 1.5)}
                initial="hidden"
                whileInView="show"
              >
                {" "}
                PROJECTS{" "}
              </motion.li>
            </a>
            <a href="#blogs">
              <motion.li
                variants={slideIn("left", "spring", 0.3, 1.5)}
                initial="hidden"
                whileInView="show"
              >
                {" "}
                BLOGS{" "}
              </motion.li>
            </a>
            <a
              target="_blank"
              rel={"noreferrer"}
              href="https://drive.google.com/file/d/13JySeiKlAXHBeqzVKB8Q-TvI55tE7JLF/view?usp=sharing"
            >
              <motion.li
                variants={slideIn("left", "spring", 0.4, 1.5)}
                initial="hidden"
                whileInView="show"
              >
                {" "}
                RESUME{" "}
              </motion.li>
            </a>

            <a href="#connect">
              <motion.li
                variants={slideIn("left", "spring", 0.5, 1.5)}
                initial="hidden"
                whileInView="show"
              >
                {" "}
                CONNECT{" "}
              </motion.li>
            </a>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
