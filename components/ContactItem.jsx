"use client";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Image from "next/image";

const ContactItem = ({ name, image, link, direction }) => {
  return (
    <motion.div
      variants={slideIn(direction, "spring", 0.5, 1.5)}
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.1 }}
      style={{ backgroundColor: "#222" }}
      className={`flex w-72 p-6 m-5 text-white rounded-b-3xl rounded-3xl hover:cursor-pointer`}
    >
      <a href={link} target={"_blank"} rel={"noreferrer"} className="w-full text-2xl flex justify-between">
        <div>
          <Image width={40} height={40} src={image} alt="contact" />
        </div>
        <div className="flex items-center">{name}</div>
      </a>
    </motion.div>
  );
};

export default ContactItem;
