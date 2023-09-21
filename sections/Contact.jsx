import { motion } from "framer-motion";
import ContactItem from "../components/ContactItem";
import { textVariant2 } from "../utils/motion";

const Contact = () => {
  return (
    <section id="connect">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={
          "text-4xl text-white mt-32 text-center font-extralight mb-16"
        }
      >
        CONNECT
      </motion.h1>
      <motion.div className={"flex flex-wrap items-center justify-center pb-48"}>
        <ContactItem
          name="LinkedIn"
          image="/linked.svg"
          link="https://www.linkedin.com/in/shreyashsingh-101"
          direction="left"
        />
        <ContactItem
          name="GitHub"
          image="/github.svg"
          link="https://github.com/shreyashsingh-101"
          direction="left"
        />
        <ContactItem
          name="Mail"
          image="/mail.svg"
          link="mailto:shreyashsingh.dev@gmail.com"
          direction="right"
        />
        <ContactItem
          name="Twitter"
          image="/twitter.svg"
          link="https://twitter.com/Shreyash_Singh_"
          direction="right"
        />
      </motion.div>
    </section>
  );
};

export default Contact;
