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
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const chageFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  console.log(filter)

  return(
    <>
      <Container>
        <Navbar/>
        <Announcement/>
        <Title>Soap</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter products:</FilterText>
            <Select defaultValue={"All_types"} name="type" onChange={chageFilter}>
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
