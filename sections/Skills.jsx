import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import { useRef } from "react";

import { slideIn, staggerContainer, textVariant } from "../utils/motion";

import { wrap } from "@motionone/utils";
import { style } from './../node_modules/@motionone/dom/lib/animate/style';

const styles = {
    parallax: "parallax",
};


function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Skills = () => {
  return (
    <section className={'skills'}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center `}
      >
        <div className={'skill__head absolute opacity-50 text-8xl'} style={{color:'#00E8FC'}}>
            SKILLS
        </div>

        <ParallaxText baseVelocity={-5}>HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; JAVASCRIPT &nbsp;&nbsp; REACTJS &nbsp;&nbsp;</ParallaxText>
        <ParallaxText baseVelocity={5}>C++ &nbsp;&nbsp; NEXTJS &nbsp;&nbsp; NODEJS &nbsp;&nbsp; EXPRESS&nbsp;&nbsp;</ParallaxText>
      </motion.div>
    </section>
  );
};

export default Skills;
