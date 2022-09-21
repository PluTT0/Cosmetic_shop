import React from 'react';
import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  background-color: #fff;
  max-width: 1280px;
  ${mobile({flexDirection: 'column', marginTop: '10px'})};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  flex: 1;
  ${mobile({alignItems: 'flex-start'})};

`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  flex: 1;
  ${mobile({display: 'none'})};
`;

const Right = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;
  ${mobile({backgroundColor: '#ecc3f584', padding: '10px 5px 5px 15px', margin: '10px 0 0 0',alignItems: 'flex-start'})};
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 35px;
  margin-left: 15px;
  ${mobile({margin: '0 0 10px 0'})}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.color};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  padding-bottom: 15px;
`;


const LinksWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
`;

const ActiveLink = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Cosmetic Shop.</Logo>
        <Title>Our social media`s:</Title>
        <SocialIconsWrapper>
          <SocialIcon color='#3227ff'>
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color='#f95454' >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='#0447ab'>
            <TelegramIcon />
          </SocialIcon>
        </SocialIconsWrapper>
      </Left>
      <Center>
        <Title>Active Links</Title>
        <LinksWrapper>
          <ActiveLink>Home</ActiveLink>
          <ActiveLink>Cart</ActiveLink>
          <ActiveLink>My Account</ActiveLink>
          <ActiveLink>Order Tracking</ActiveLink>
          <ActiveLink>Wish List</ActiveLink>
        </LinksWrapper>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon/> Lorem ipsum dolor sit amet.
        </ContactItem>
        <ContactItem>
          <PhoneAndroidOutlinedIcon/> +44 333 333 333
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon/> contact@shop.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer;