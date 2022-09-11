import React from 'react';
import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
`;

const Left = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const Center = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const Right = styled.div`
  margin-left: 20px;
  flex: 1;
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