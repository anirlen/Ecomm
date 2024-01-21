import React from "react";
import { Astronaut } from "./canvas";
import styled from "styled-components"
import Earth from "./canvas/Jordan";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: white;
  position: relative;
  overflow: hidden;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

  const Title = styled.h1`
  padding: 20px;
  font-size: 70px;
  color: red;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
  
const Threed = () => {
  return (

    <Container> 
    <Title> Only 3 Left For $120</Title>
        <ErrorBoundary>
            <Earth />
        </ErrorBoundary>
    </Container>

    );
};

export default Threed;

