import React from 'react';
import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';


const Container = styled.div`
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
`;

const Lanquage = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-content: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Lanquage>EN</Lanquage>
                <SearchContainer>
                    <Input />
                    <Search style={{color: "gray", fontSize: "16px" }} />
                </SearchContainer>
            </Left>
            <Center><Logo>Corean Cosmetics</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="black" />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
};

export default Navbar;