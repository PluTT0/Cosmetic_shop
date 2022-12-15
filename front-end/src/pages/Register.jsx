import React from 'react';
import styled from 'styled-components';

import { mobile } from '../styles/responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://res.cloudinary.com/dlw1urjvs/image/upload/v1663124706/cosmetic%20shop/pexels-monstera-6621224_jiyvua.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding:20px;
  width: 30%;
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
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0 0 0;
  padding: 10px;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <>

      <Container>
        <Wrapper>
          <Title>Create your account</Title>
          <Form>
            <Input placeholder='name'/>
            <Input placeholder='email'/>
            <Input placeholder='password'/>
            <Input placeholder='confirm password'/>
            <Agreement>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate impedit sit sint? <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Register</Button>
          </Form>
        </Wrapper>

      </Container>
    </>
  )
}

export default Register
