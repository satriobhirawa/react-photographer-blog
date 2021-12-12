import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Medcap
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #282828;
  min-height: 10vh;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li {
    color: white;
    padding-left: 10rem;
    position: relative;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 1.5rem;
  }
`;

export default Nav;
