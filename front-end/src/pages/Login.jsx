import React from 'react';
import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://res.cloudinary.com/dlw1urjvs/image/upload/v1663130179/cosmetic%20shop/pexels-shvets-production-9774906_yzls9n.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding:20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: '75%'})}
`;
const Title = styled.h1`
  text-align: center;
  font-style: 28px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0 0 0;
  padding: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder='email'/>
            <Input placeholder='password'/>
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
          </Form>
        </Wrapper>

      </Container>
    </>
  )
}

export default Login
