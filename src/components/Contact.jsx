import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card'; 

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StyledCard = styled(Card)`
  width: auto;
  background-color: #FFFFFF;
`;

const Typography = styled.div`
  background-color: #FFFFFF;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  display: flex;
`

const Contact = () => {
  return (
    <Container>
      <Title> Contact With Us</Title>
      <StyledCard>
        <Typography>
          Email: team28IU@gmail.com 
        </Typography>
        <Typography>
        Phone Number: (+1) 213 3214 1234
        </Typography>
        <Typography>
          Fax: (123)-456-7890
        </Typography>
        <Typography>
          Location: 1234 NW Somewhere Lane, St. SKidada, MO 65584-5678
        </Typography>
      </StyledCard>
    </Container>
  );
}

export default Contact;
