import React from "react";
import styled from "styled-components";
import Navbar from "../reusable/Navbar";

function HomePage() {
  return (
    <>
      <Header>
        <Navbar />
        <img src="/hero-3x.webp" alt="" />
        <img src="/hero-mobile.webp" alt="" id="hero-img-mobile" />
      </Header>
    </>
  );
}

export default HomePage;
const Header = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center right;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  #hero-img-mobile {
    display: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center left;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
