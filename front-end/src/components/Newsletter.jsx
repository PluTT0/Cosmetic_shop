import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #e4bbbb8f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 20px;;
`;

const Description = styled.div`
    margin-bottom: 20px;
    font-size:20px;
    font-weight: 300;
    letter-spacing: 3px;
    ${mobile({textAlign: 'center'})};
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 0.5px solid lightgray;
    ${mobile({width: '80%'})};
`;

const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 17px;
    padding-left: 20px;
`;

const SendButton = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your email' />
            <SendButton><SendOutlinedIcon/></SendButton>
        </InputContainer>
    </Container>
  )
}

export default Newsletter