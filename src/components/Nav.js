import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Medcap
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
