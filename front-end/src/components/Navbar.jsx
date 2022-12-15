import React from 'react';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { NavbarStyle } from '../styles';

const { 
    Container,
    Wrapper,
    Left,
    Lanquage,
    SearchContainer,
    Input,
    Center,
    Right,
    MenuItem,
    Logo,
} = NavbarStyle;


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