import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FooterStyle } from '../styles';

const {
  ContactItem,
  Container,
  Left,
  Title,
  FooterLogo,
  SocialIcon,
  SocialIconsWrapper,
  Center,
  LinksWrapper,
  ActiveLink,
  Right,
} = FooterStyle;


const Footer = () => {
  return (
    <Container>
      <Left>
        <FooterLogo>Cosmetic Shop.</FooterLogo>
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
          <ActiveLink><p>Home</p></ActiveLink>
          <ActiveLink><p>Cart</p></ActiveLink>
          <ActiveLink><p>My Account</p></ActiveLink>
          <ActiveLink><p>Order Tracking</p></ActiveLink>
          <ActiveLink><p>Wish List</p></ActiveLink>
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