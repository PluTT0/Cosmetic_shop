import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import {
  Container,
  SectionWrapper,
  Wrapper,
  ImgContainet,
  Image,
  InfoContent,
  Title,
  Descr,
  Price,
  Filter,
  FilterContainer,
  FilterTitle,
  FilterVolume,
  FilterVolumeOption,
  Add,
  Amount,
  AmountContainer,
  Remove,
  Button,
  ButtonContainer,
} from '../styles/productPageStyles';

const ProductPage = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <Announcement/>
        <SectionWrapper>
          <Wrapper>
            <ImgContainet>
              <Image src="https://res.cloudinary.com/dlw1urjvs/image/upload/v1655116352/cosmetic%20shop/photo_2022-06-12_13-01-29_tfn1hb.jpg"/>
            </ImgContainet>
            <InfoContent>
              <Title>
                ProductTitle
              </Title>
              <Descr>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt quidem beatae repellendus tenetur, ullam suscipit rerum sapiente doloribus eligendi, iure dolores fuga enim fugit nihil, eius eum vero repudiandae.
              </Descr>
              <Price>$ 20</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Volume:</FilterTitle>
                  <FilterVolume>
                    <FilterVolumeOption>
                      50 ml
                    </FilterVolumeOption>
                    <FilterVolumeOption>
                      100 ml
                    </FilterVolumeOption>
                    <FilterVolumeOption>
                      150 ml
                    </FilterVolumeOption>
                  </FilterVolume>
                </Filter>
              </FilterContainer>
              <ButtonContainer>
                <AmountContainer>
                  <Remove>-</Remove>
                  <Amount>1</Amount>
                  <Add>+</Add>
                </AmountContainer>
                <Button>ADD TO CARD</Button>
              </ButtonContainer>
            </InfoContent>
          </Wrapper>
        </SectionWrapper>
        <Newsletter/>
        <Footer/>
      </Container>
    </>
  )
}

export default ProductPage
