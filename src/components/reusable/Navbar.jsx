import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Nav>
        <LeftNav>
          <a href="#" id="NavLink">
            Shop
          </a>
          <a href="#" id="NavLink">
            Our Story
          </a>
          <Menu>
            <div></div>
            <div></div>
          </Menu>
        </LeftNav>
        <Center>
          <img src="/Logo.svg" alt="" id="Navlogo" />
        </Center>
        <RightNav>
          <a href="#" id="NavLink">
            One Feeds Two
          </a>
          <a href="#" id="NavLink">
            Find Olly's
          </a>
          <NavIcons>
            <img src="/icons/Profile-white.svg" alt="" id="profile" />
            <img src="/icons/Cart.svg" alt="" id="cart" />
          </NavIcons>
        </RightNav>
      </Nav>
    </>
  );
}

export default Navbar;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 3vw;
  text-align: center;
  z-index: 2;
  #NavLink {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
`;
const LeftNav = styled.div`
  a {
    margin-right: 3vw;
    color: white;
    font-family: montserrat-sem;
  }
`;
const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 3vw;
    color: white;
    font-family: montserrat-sem;
  }
`;
const NavIcons = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;
  height: 100%;
  #profile {
    height: 1.8rem;
    width: 1.8rem;
    @media screen and (max-width: 786px) {
      display: block;
    }
    @media screen and (max-width: 992px) {
      height: 2.3rem;
      width: 2.3rem;
    }
  }
  #cart {
    height: 1.8rem;
    width: 1.8rem;
    @media screen and (max-width: 786px) {
      display: block;
    }
    @media screen and (max-width: 992px) {
      height: 2.3rem;
      width: 2.3rem;
    }
  }
`;
const Center = styled.div`
  position: absolute;
  top: 10%;
  left: 42%;

  @media screen and (max-width: 786px) {
    width: 70px;
    margin: 0 auto;
  }
  #Navlogo {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    @media screen and (max-width: 786px) {
      display: block;
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;

const Menu = styled.div`
  display: none;
  div {
    background-color: white;
    height: 0.5vw;
    width: 5vw;
    margin-bottom: 8px;
    @media screen and (max-width: 576px) {
      height: 0.8vw;
      width: 5.5vw;
    }
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
