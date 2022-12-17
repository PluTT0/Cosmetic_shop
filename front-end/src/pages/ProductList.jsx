import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('');
  const chageFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  console.log(cat, filter)

  return(
    <>
      <Container>
        <Navbar/>
        <Announcement/>
        <Title>Soap</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter products:</FilterText>
            <Select defaultValue={"all_categories"} name="category" onChange={chageFilter}>
              <Option disabled value="category">Categories</Option>
              <Option value="all_types">All categories</Option>
              <Option value="cream">Cream</Option>
              <Option value="soap">Soap</Option>
              <Option value="oil">Aroma oil</Option>
              <Option value="shampoo">Shampoo</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Product value</FilterText>
            <Select defaultValue={""} name="value" onChange={chageFilter}>
              <Option value="50">50 ml</Option>
              <Option value="100">100 ml</Option>
              <Option value="150">150 ml</Option>
              <Option value="200">200 ml</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort products:</FilterText>
            <Select defaultValue={"Newest"} name="sort" onChange={(e) => {setSort(e.target.value)}}>
              <Option value="newest">Newest</Option>
              <Option value="asc" >Price (asc)</Option>
              <Option value="desc" >Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filter} sort={sort} />
        <Newsletter/>
        <Footer/>
      </Container>
    </>
  )
};

export default ProductList
