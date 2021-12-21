import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion/dist/framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} animate="show" initial="hidden" exit="exit">
      <Movie>
        <h2>Sportler</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete movie" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="Racer movie" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Time movie" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 70vh;
  }
`;

export default OurWork;
