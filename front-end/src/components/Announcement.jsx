import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
`
const Announcement = () => {
  return (
    <Container>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Container>
  )
}

export default Announcement