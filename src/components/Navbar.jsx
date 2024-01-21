import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Outlet, Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;


const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 15px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          
        </Left>
        <Center>
          <Logo>AMEA</Logo>
        </Center>
        <Right>
        <MenuItem>
            <Link to="/Home">HOME</Link>

          </MenuItem>
          <MenuItem>
            <Link to="/Buy">BUY</Link>

          </MenuItem>
          <MenuItem>
            <Link to="/Sell">SELL</Link>

          </MenuItem>
          <MenuItem>
            <Link to="/SignIn">SIGN IN</Link>

          </MenuItem>
          <MenuItem>
            <ShoppingCart />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
