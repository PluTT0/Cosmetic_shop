import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container =styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Wrapper =styled.div`
  margin: 20px;
`;
const Title =styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
`;

const TopText = styled.p`
  text-decoration: underline;
  cursor: pointer;
  padding: 0 10px;
`;

const TopButtom = styled.button`
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  border: ${props=>props.type === 'filled' && 'none'};
  background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props=>props.type === 'filled' && '#fff'};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 15px 10px 15px 0;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div` 
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName= styled.div`
`;

const ProductId = styled.p`
`;

const ProductType = styled.p`
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-style: 24px;
  margin: 5px;
  font-size: 25px;
  font-weight: 100;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 350px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-size: ${props=> props.type === "total" && "24px"};
`;

const SummaryItemText = styled.p`
  
`;

const SummaryItemPrice = styled.p`
  
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600px;
`;
const Cart = () => {
  return (
    <>
      <Navbar/>
      <Announcement/>
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButtom>CONTINUE SHOPPING</TopButtom>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButtom type='filled'>CHECKOUT NOW</TopButtom>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://res.cloudinary.com/dlw1urjvs/image/upload/v1655116352/cosmetic%20shop/photo_2022-06-12_13-01-31_uuilmq.jpg"/>
                  <Details>
                    <ProductName><b>Product: </b>Biotique Bio Morning Nectar Moisturizing Cream Bathing Bar (150 g)</ProductName>
                    <ProductId><b>Id: </b>05005</ProductId>
                    <ProductType><b>Type: </b>Soap</ProductType>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <ProductDetail>
                  <Image src="https://res.cloudinary.com/dlw1urjvs/image/upload/v1655116351/cosmetic%20shop/photo_2022-05-26_23-39-01_fglky3.jpg"/>
                  <Details>
                    <ProductName><b>Product: </b>Bio shower gel with coconut milk</ProductName>
                    <ProductId><b>Id: </b>05005</ProductId>
                    <ProductType><b>Type: </b>Soap</ProductType>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimate Shopping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer/>
    </>
  )
}

export default Cart
