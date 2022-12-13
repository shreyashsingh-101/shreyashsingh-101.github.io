"use client";

import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

import p1 from "../public/p1.png";
import p2 from "../public/p2.png";
import p3 from "../public/p3.png";




const Projects = () => {
  return (
    <section id="projects">
      <motion.h1
        className={"text-4xl text-white mt-32 text-center font-extralight mb-16 pt-10"}
      >PROJECTS</motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        <ProjectItem name={"React Piano"} img={p1} code={"https://github.com/shreyashsingh-101/Piano"} live={"https://ssreact-piano.netlify.app"} description={'A beautiful piano created using React, HTML and CSS which is mobile device friendly and can be played using touch and keyboard.'} />

        <ProjectItem name={"The Coders Adda"} img={p2} code={"https://github.com/shreyashsingh-101/Hack-Nagpur"} live={""} description={"One Stop Destination for all developers to get resources, team and productivity manager."} />

        <ProjectItem name={"React meme Generator"} img={p3} code={"https://github.com/shreyashsingh-101/Devsnest-Tasks/tree/master/THA%20Day%2022/day22"} live={"https://confident-tereshkova-2c7135.netlify.app"} description={"React based meme generator which uses imgflip API."} />

        
      </motion.div>
    </section>
  );
};

export default Projects;
