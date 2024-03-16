import { motion } from "framer-motion";

import styles from "../styles";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion";

import { useState, useEffect } from "react";
import Blog from "../components/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    const res = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                query Publication {
                  publication(host: "shreyashsingh101.hashnode.dev") {
                    isTeam,
                    title,
                    posts(first: 10) {
                      edges {
                        node {
                          title,
                          brief,
                          coverImage{
                            url
                          },
                          slug
                        }
                      }
                    }
                  }
                }
          `,
      }),
    });
    const data = await res.json().then((data) => {
      setBlogs(data.data.user.publication.posts.slice(0, 4));
      console.log("called");
    });
  }

  useEffect(() => {
    getBlogs();
  }, []);

  let i = 0;

  return (
    <section id="blogs">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        <motion.h1
          className={
            "text-4xl text-white mt-12 text-center font-extralight mb-16"
          }
        >
          BLOGS
        </motion.h1>
        {blogs.map((blog) => {
          return <Blog key={i++} blog={blog} direction={i % 2 ? "left" : "right"} />;
        })}
      </motion.div>
    </section>
  );
};

export default Blogs;
