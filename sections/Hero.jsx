import { motion } from "framer-motion";
import arrowStyles from "../styles/Hero.module.css";
import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p-16 p-6 sm:mt-0 mt-8`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.1 }}
        style={{ backgroundColor: "#263159", boxShadow: "5px 5px 1px #263170" }}
        className={`${styles.paddings} text-white h-auto w-auto mx-auto rounded-b-3xl rounded-tr-3xl hover:cursor-pointer`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className={"sm:text-6xl text-4xl"}
        >
          Hi, I'm Shreyash
        </motion.h1>
      </motion.div>

      <motion.div
        variants={slideIn("right", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.1 }}
        style={{ backgroundColor: "#495579", boxShadow: "5px 5px 1px #505599" }}
        className={`${styles.paddings} text-white h-auto w-auto mx-auto rounded-b-3xl rounded-tl-3xl mt-10 hover:cursor-pointer`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className={"sm:text-6xl text-4xl"}
        >
          a Full Stack Web Developer
        </motion.h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("down", "spring", 1, 0.1)}
        className={`${styles.flexCenter} mt-14 hover:cursor-pointer`}
      >
        <a href="#skills">
          <svg className={`${styles.flexCenter} ${arrowStyles.arrows}`}>
            <path className={`${arrowStyles.a1}`} d="M0 0 L30 32 L60 0"></path>
            <path
              className={`${arrowStyles.a2}`}
              d="M0 20 L30 52 L60 20"
            ></path>
            <path id="skills"
              className={`${arrowStyles.a3}`}
              d="M0 40 L30 72 L60 40"
            ></path>
          </svg>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
