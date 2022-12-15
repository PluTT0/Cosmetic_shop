import styled from "styled-components";
import { mobile } from './responsive';


const Container = styled.div`
    margin: 0 auto;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none',})};
    max-width: 1400px;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "15px"};
    right: ${props => props.direction === "right" && "15px"};
    margin: auto;
    cursor: pointer;
    font-size: 10px;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image  = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 600;
`;

const Description = styled.p`
    margin: 50px 0;
    font-size:20px;
    font-weight: 300;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
`;


export {
    Container,
    Arrow,
    Slide,
    Wrapper,
    ImgContainer,
    Image,
    Title,
    InfoContainer,
    Description,
    Button
}