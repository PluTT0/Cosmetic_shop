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


const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort)

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:8000/api/products?category=${cat}` : `http://localhost:8000/api/products`);
          console.log(res.data)
        setProducts(res.data);
        setFilteredProducts(res.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getProducts()
  },[cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(
          ([key, value]) => item[key].includes(value))
      )
    )
  }, [products, cat, filters])


  return (
    <>
      <Container>
          {filteredProducts.map((item) => {
              return(
                  <Product item={item} key={item._id}/>
              )
          })}
      </Container>
    </>
  )
}

export default Products;