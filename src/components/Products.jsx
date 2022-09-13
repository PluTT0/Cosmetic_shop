import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product';


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
`;

const Title = styled.h2`
  color: #fff;
  padding: 20px 0;
  text-shadow: 0px 0px 6px rgba(66, 68, 90, 1);
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  background-color: #008080;
`;

const Products = () => {
  return (
    <>
      <Title>Popular products</Title>
      <Container>
          {popularProducts.map((item) => {
              return(
                  <Product item={item} key={item.id}/>
              )
          })}
      </Container>
    </>
  )
}

export default Products;