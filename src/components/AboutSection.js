import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us to make your creativity into reality
          </motion.p>

          <motion.button variants={fade}>Contact us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img src={home1} alt="guy with camera" variants={photoAnim} />
      </Image>
    </About>
  );
};

export default AboutSection;
