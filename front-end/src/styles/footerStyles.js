import styled from 'styled-components';
import { mobile } from './responsive';

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  /* max-width: 1280px; */
  ${mobile({flexDirection: 'column', marginTop: '10px'})};
  background-color: teal;
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

const FooterLogo = styled.h2`
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
  &:hover{
    box-shadow: 0 0.2em 0.2em -0.3em;
    transform: translateY(-0.03em);
  }
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
  cursor: pointer;
  p {
    display: inline-block;
    transition: .5s ease;
  } p:hover {
    box-shadow: 0 2px 0 0 currentcolor;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;


export {
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
}