import { motion } from "framer-motion";

import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";

const Blog = ({ blog, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, "spring", 0.5, 1.5)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col justify-center items-center rounded-xl overflow-hidden cursor-pointer w-3/4"
      style={{
        minHeight: "300px",
        height: "auto",
        margin: "20px",
        background: `url(${blog.coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full w-full sm:backdrop-blur-[2px] p-6 backdrop-brightness-50 hover:backdrop-brightness-[.6] rounded-xl overflow-hidden cursor-pointer">
        <a
          href={"https://shreyashsingh101.hashnode.dev/" + blog.slug}
          target={"_blank"}
          rel={"noreferrer"}
          className="h-full w-full  flex flex-col justify-center items-center sm:p-6"
          style={{ minHeight: "300px" }}
        >
          <h1 className="md:text-2xl text-xl font-bold text-white">{blog.title}</h1>
          <p className="md:text-xl text-md text-white">{`${blog.brief.slice(0,160)}...  Read More`}</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Blog;
