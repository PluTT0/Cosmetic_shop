import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import {popularProducts} from '../data';
import Product from './Product';
import axios from 'axios';


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 1280px;
    margin: 0 auto;
`;


const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/products/')
        console.log(res)
      } catch (error) {
        console.log(error)
      } 
    }
    getProducts()
  },[cat])
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