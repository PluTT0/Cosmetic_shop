import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../styles/responsive';


const Container = styled.div`
`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
  ${mobile({ margin: '20px 0  10px 0'})};
`;
const FilterContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  margin-right: 15px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({ marginTop: '15px'})}
`;
const Option = styled.option`
`;

const ProductList = () =>  {
  return(
    <>
      <Container>
        <Navbar/>
        <Announcement/>
        <Title>Soap</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter products:</FilterText>
            <Select defaultValue={"All_types"}>
              <Option disabled value="Type">Type</Option>
              <Option value="All_types">All types</Option>
              <Option value="Cream">Cream</Option>
              <Option value="Soap">Soap</Option>
              <Option value="Aroma_oil">Aroma oil</Option>
              <Option value="Shampoo">Shampoo</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort products:</FilterText>
            <Select defaultValue={"Newest"}>
              <Option value="Newest">Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
      </Container>
    </>
  )
};

export default ProductList
