import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContentMui from '@mui/material/CardContent'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sweater from '../../pics/sweater.webp';
import React from 'react';
import shirt from '../../pics/shirt.webp';
import jeans from '../../pics/jeans.webp';
import jacket from '../../pics/jacket.jpg'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  width: 80%; 
  max-width: 1200px;


  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCard = styled(Card)`
  width: 250px;
  background-color: teal;
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 
  
  

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: white;
  transition: transform 0.3s ease; 
  
  &:hover {
    transform: scale(1.2); 
  }
`;

const CustomCardContent = styled(CardContentMui)`
  width: auto;
`;

const Items = () => {
  return (
    <Container>
      <Title>New Arrivals</Title>

      <CardsContainer>
        <StyledCard sx={{ maxWidth: 300 }}>
          <Image src={Sweater} alt="Sweater" />
          <CustomCardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sweater 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort.
            </Typography>
          </CustomCardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </StyledCard>

        <StyledCard sx={{ maxWidth: 300 }}>
          <Image src={shirt} alt="Sweater" />
          <CustomCardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shirt 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort.
            </Typography>
          </CustomCardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </StyledCard>

        <StyledCard sx={{ maxWidth: 300 }}>
          <Image src={jeans} alt="Sweater" />
          <CustomCardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jeans 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort.
            </Typography>
          </CustomCardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </StyledCard>


        <StyledCard sx={{ maxWidth: 300 }}>
          <Image src={jacket} alt="Sweater" />
          <CustomCardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jeans 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Warm and stylish sweater, perfect for cold winter days. Made from high-quality materials for maximum comfort.
            </Typography>
          </CustomCardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </StyledCard>

      </CardsContainer>
    </Container>
  );
};

export default Items;
