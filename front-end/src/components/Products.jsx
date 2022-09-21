import React from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product';


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 1280px;
    margin: 0 auto;
`;


const Products = () => {
  return (
    <>
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