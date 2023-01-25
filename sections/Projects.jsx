"use client";

import { motion } from "framer-motion";
import ProjectItem from "../components/ProjectItem";
import { config } from "react-spring";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

import { staggerContainer } from "../utils/motion";
import { useState } from "react";

const Projects = () => {
  const [goToSlide, setGoToSlide] = useState(3);

  const [xDown, setXDown] = useState(null);

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];
    setXDown(firstTouch.clientX);
  };

  const handleTouchMove = (e) => {
    if (!xDown) {
      return;
    }

    const xUp = e.touches[0].clientX;
    const xDiff = xDown - xUp;

    if (xDiff > 0) {
      setGoToSlide(goToSlide + 1);
    } else {
      setGoToSlide(goToSlide - 1);
    }

    setXDown(null);
  };

  let slides = [
    {
      key: 0,
      content: (
        <ProjectItem
          name={"AI Song Writer"}
          img={"/p5.PNG"}
          code={"https://github.com/shreyashsingh-101/gpt3-project"}
          live={"https://ai-song-generator.onrender.com"}
          description={
            "A web app that uses OpenAI's GPT-3 API to generate song lyrics, in the style of Drake."
          }
        />
      ),
    },

    {
      key: 1,
      content: (
        <ProjectItem
          name={"Typos"}
          img={"/p4.PNG"}
          code={"https://github.com/shreyashsingh-101/typos"}
          live={"https://typos.vercel.app"}
          description={
            "A Typing speed test app made using React and Tailwind CSS, with Firebase authentication."
          }
        />
      ),
    },

    {
      key: 2,
      content: (
        <ProjectItem
          name={"React meme Generator"}
          img={"/p3.PNG"}
          code={
            "https://github.com/shreyashsingh-101/Devsnest-Tasks/tree/master/THA%20Day%2022/day22"
          }
          live={"https://confident-tereshkova-2c7135.netlify.app"}
          description={"React based meme generator which uses imgflip API."}
        />
      ),
    },

    {
      key: 3,
      content: (
        <ProjectItem
          name={"The Memory Game"}
          img={"/p2.PNG"}
          code={
            "https://github.com/shreyashsingh-101/Devsnest-Tasks/tree/master/THA%20Day%2010"
          }
          live={"https://shreyashsingh.me/Devsnest-Tasks/THA%20Day%2010"}
          description={
            "A mobile-friendly, JavaScript based game that puts your memory to test"
          }
        />
      ),
    },

    {
      key: 4,
      content: (
        <ProjectItem
          name={"React Piano"}
          img={"/p1.PNG"}
          code={"https://github.com/shreyashsingh-101/Piano"}
          live={"https://ssreact-piano.netlify.app"}
          description={
            "A beautiful piano created using React, HTML and CSS which is mobile device friendly and can be played using touch and keyboard."
          }
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <section id="projects">
      <motion.h1 className={"text-4xl text-white m-auto text-center w-80%"}>
        PROJECTS
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col items-center h-[600px] w-[25%] md:w-[85%]`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={5}
          showNavigation={false}
          animationConfig={config.slow}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
