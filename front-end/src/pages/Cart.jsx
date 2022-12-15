import { Add, Remove } from '@mui/icons-material';
import React from 'react';

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CartPageStyle } from '../styles';

const {    
  Container,
  Wrapper,
  Title,
  Top,
  TopText,
  TopButtom,
  TopTexts,
  Button,
  Info,
  Hr,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductType,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  Summary,
  SummaryTitle,
  SummaryItemPrice,
  SummaryItemText,
  SummaryItem,
  ProductPrice,
  Bottom,
} = CartPageStyle;

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
