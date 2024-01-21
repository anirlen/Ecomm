import React from "react";
import styled from "styled-components";
import waste from "../../pics/waste.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 70px;
  color: black;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Info = styled.div`
    max-width: 600px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin: 20px 0;
    }
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  padding: 5px;
`;

const About = () => {
  console.log('my componenet is rendering')
  return (
    <Container> 
      <Title> Environment Matters</Title>
      <InfoContainer>
        <Info>
          Throwing away clothes might seem inconsequential, but the alarming statistics surrounding textile waste highlight the urgency of this issue. Each year, the world generates a staggering 92 million tons of textile waste, with China and the US being the leading contributors, producing 20 million and 17 million tons respectively. Shockingly, clothing and textiles constitute at least 7% of the total waste occupying our global landfills. The rapid fashion industry churns out between 80 and 100 billion new clothing items annually, adding to this alarming waste stream. Disturbingly, a staggering 87% of the materials used in clothing production inevitably end up in incinerators or landfills. What's even more concerning is the fact that only 20% of discarded textiles are collected, and a mere 1% of clothes are recycled into new garments. This grave reality emphasizes the crucial importance of rethinking our approach to clothing disposal. Each piece thrown away contributes to environmental degradation, urging us to consider sustainable alternatives, promote recycling, and raise awareness about the pressing need for change.
        </Info>
        <ImgContainer>
          <Image src={waste} alt="waste 1" />
        </ImgContainer>
      </InfoContainer>
    </Container>
  );
};

export default About;
