import React from "react";
import { Astronaut } from "./canvas";
import styled from "styled-components"
import Earth from "./canvas/Google";
import { Outlet, Link } from "react-router-dom";


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
  color: black;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
  
const SignIn = () => {
  return (

    <Container> 
        <Title> Sign In Using Google</Title>
        <Link to="/Home">Press Here</Link>


        <ErrorBoundary>
            <Earth />
        </ErrorBoundary>
    </Container>

    );
};

export default SignIn;

