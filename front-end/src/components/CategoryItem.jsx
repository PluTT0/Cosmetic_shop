import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    ${mobile({height: '35vh'})};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    text-shadow: 0px 0px 6px rgba(66, 68, 90, 1);
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px;
    background-color: #fff;
    color: #000000;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #dcc2e0;
    }
`;

const ImgContainer = styled.div`
    display: block;
    background-color: #0a0a0a;
    z-index: 1;
    width: 100%;
    height: 100%;
`

const CategoryItem = ({item}) => {
  return (
    <>
        <Container> 
            <Link to={`/products/${item.cat}`}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP HERE</Button>
                </Info>
            </Link>
        </Container>
    </>
  )
}

export default CategoryItem