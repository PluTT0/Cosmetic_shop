import styled from 'styled-components';
import { mobile } from './responsive';

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


export {
    ContactItem,
    Container,
    Left,
    Title,
    Logo,
    SocialIcon,
    SocialIconsWrapper,
    Center,
    LinksWrapper,
    ActiveLink,
    Right,
}