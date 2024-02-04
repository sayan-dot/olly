import React from "react";
import styled from "styled-components";
import Navbar from "../reusable/Navbar";
import HeroContent from "../HeroContent";

function HomePage() {
  return (
    <>
      <Header>
        <Container>
          <Navbar />
          <HeroContent />
        </Container>
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
  width: 100%;
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
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1280px;
  margin: 0 auto;
`;
