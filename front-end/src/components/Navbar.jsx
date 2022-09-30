import React from 'react';
import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { mobile } from '../responsive'


const Container = styled.div`
    ${mobile({height: ''})};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({display: 'none'})};
`;

const Lanquage = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    ${mobile({display: 'none'})};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({margin: '0px 15px 0 15px'})};
`;

const Input = styled.input`
    border: none;
    ${mobile({fontSize:'12px'})};
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize:'24px', marginLeft: '35px'})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    ${mobile({flex: '2', justifyContent: 'center'})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px;'})};
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Lanquage>EN</Lanquage>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color: "gray", fontSize: "16px" }} />
                </SearchContainer>
            </Left>
            <Center><Link to={'/'}><Logo>Corean Cosmetics</Logo></Link></Center>
            <Right>
                <MenuItem><Link to={'/register'}>REGISTER</Link></MenuItem>
                <MenuItem><Link to={'/login'}>SIGN IN</Link></MenuItem>
                <MenuItem>
                    <Link to={'/cart'}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="black" />
                        </Badge>
                    </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
};

export default Navbar;