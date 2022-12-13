"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
  textContainer,
  staggerChildren,
} from "../utils/motion";

import { isMobile } from 'react-device-detect';



const ProjectItem = ({ name, img, description, code, live}) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 1.5)}
      initial="hidden"
      whileInView="show"
      className="rounded-xl overflow-hidden cursor-pointer w-3/4 md:w-2/3 "
      style={{
        minHeight: "300px",
        height: "auto",
        margin: "20px",
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={isMobile ? "show" : "hidden"}
        whileHover="show"
        style={{ minHeight: "300px" }}
        className="flex flex-col justify-center items-center p-6 md:backdrop-brightness-50 backdrop-brightness-[.2] hover:backdrop-brightness-[.2] rounded-xl overflow-hidden cursor-pointer"
      >
        <h1
          className="md:text-3xl text-xl font-bold text-white"
          style={{ textShadow: "0 0 5px black" }}
        >
          {name}
        </h1>
        <motion.div
          variants={textVariant(0.3)}
          className="md:text-xl text-sm text-white"
        >
          {description}
        </motion.div>

        <motion.div
          variants={slideIn("up", "spring", 0.5, 1.5)}
          className="flex flex-row justify-center items-center text-sm mt-3"
        >
          <a
            href={code}
            target="_blank"
            rel={"noreferrer"}
            className={
              "m-2 sm:px-4 px-2 sm:py-2 py-1 rounded-sm bg-gray-800 text-white hover:bg-gray-600"
            }
          >
            View Code
          </a>

          <a
            href={live}
            target="_blank"
            rel={"noreferrer"}
            className={
              "m-2 sm:px-4 px-2 sm:py-2 py-1 rounded-sm bg-gray-800 text-white hover:bg-gray-600"
            }
          >
            View Project
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );4
};

export default ProjectItem;