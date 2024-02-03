import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Nav>
        <LeftNav>
          <a href="#">Shop</a>
          <a href="#">Our Story</a>
        </LeftNav>
        <Center>
          <NavLogo src="/Logo.svg" alt="" id="Navlogo" />
        </Center>
        <RightNav>
          <a href="#">One Feeds Two</a>
          <a href="#">Find Olly's</a>
          <NavIcons>
            <img src="/Profile-white.svg" alt="" id="profile" />
            <img src="/Cart.svg" alt="" id="cart" />
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
  a {
    margin-right: 3vw;
    color: white;
    font-family: montserrat-sem;
  }
`;
const NavIcons = styled.div`
  display: flex;
  gap: 1vw;
  #profile {
    height: 2vw;
    width: 2vw;
  }
  #cart {
    height: 2vw;
    width: 2vw;
  }
`;
const Center = styled.div`
  position: absolute;
  top: 10%;
  left: 45%;
`;

const NavLogo = styled.img`
  flex: 1;
`;
