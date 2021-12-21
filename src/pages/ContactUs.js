import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{ background: "#FFF" }}
    >
      ContactUs
    </motion.div>
  );
};

export default ContactUs;
