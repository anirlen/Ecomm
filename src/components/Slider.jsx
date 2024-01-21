import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import pic1 from "../../pics/pic1.jpg";
import pic2 from "../../pics/pic2.jpg";
import pic3 from "../../pics/pic3.png";
import React, { useState } from "react";
import shirt from '../../pics/shirt.webp';
import shirt2 from '../../pics/shirt2.png';
import shirt3 from '../../pics/shirt3.png';




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Infocontainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 5px;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    } else {
      setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <Slide bg="#FFFFFF">
          <ImgContainer>
            <Image src={shirt} alt="Slide 1" />
          </ImgContainer>
          <Infocontainer>
            <Title>Winter Sale</Title>
            <Desc>Excepteur dolor commodo ipsum sit dolore sint cupidatat quis in id sunt voluptate dolor pariatur.</Desc>
            <Button>See More</Button>
          </Infocontainer>
        </Slide>
        <Slide bg="#FFFFFF">
          <ImgContainer>
            <Image src={shirt2} alt="Slide 2" />
          </ImgContainer>
          <Infocontainer>
            <Title>Spring Sale</Title>
            <Desc>BAmet ipsum commodo ullamco aute nulla Lorem nulla dolore veniam aute Lorem ad.</Desc>
            <Button>See More</Button>
          </Infocontainer>
        </Slide>
        <Slide bg="#FFFFFF">
          <ImgContainer>
            <Image src={shirt3} alt="Slide 3" />
          </ImgContainer>
          <Infocontainer>
            <Title>Fall Sale</Title>
            <Desc>Cupidatat qui anim laborum fugiat..</Desc>
            <Button>See More</Button>
          </Infocontainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;


