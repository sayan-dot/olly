// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
function HeroContent() {
  return (
    <>
      <HeroText>
        <ContentWrapper>
          <Rating>
            <span id="NumberRating">4.89</span>
            <img src="/icons/star-solid.svg" alt="" />
            <img src="/icons/star-solid.svg" alt="" />
            <img src="/icons/star-solid.svg" alt="" />
            <img src="/icons/star-solid.svg" alt="" />
            <img src="/icons/star-solid.svg" alt="" />
            <span id="Reviews">2257 Reviews</span>
          </Rating>
          <Header>
            SNACKS <br />
            SOOO GOOD
          </Header>
          <Para>
            Healthier delicious snacks designed to feed your feel good!
          </Para>
          <div>Button</div>
        </ContentWrapper>
      </HeroText>
    </>
  );
}

export default HeroContent;

const HeroText = styled.div`
  height: 100vh;
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Rating = styled.div`
  span {
    color: white;
  }
  img {
    margin-left: 0.2vw;
    width: 1rem;
    height: 1rem;
  }
  #NumberRating {
    margin-right: 0.7vw;
  }
  #Reviews {
    margin-left: 0.7vw;
  }
`;

const Header = styled.div`
  color: white;
  font-family: rogo;
  font-size: 11vw;
  line-height: 8.5vw;
  margin: 2vw 0;
`;
const Para = styled.p`
  width: 30%;
  color: white;
  font-size: 1.3vw;
  font-family: montserrat-sem;
`;
