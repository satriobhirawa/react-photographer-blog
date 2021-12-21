import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion/dist/framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
          <p>Contact us to make your creativity into reality</p>

          <button>Contact us</button>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt="guy with camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
