import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`;

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
`;

const ImgContainet = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContent = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Descr = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 15px 0;
`;

const FilterTitle = styled.p`
  margin-right: 10px;
  font-size: 25px;
  font-weight: 60;
`;

const FilterVolume = styled.select``;

const FilterVolumeOption = styled.option``;

const ButtonContainer =styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const AmountContainer =styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Remove =styled.div`
  font-size: 20px;
`;

const Amount =styled.p`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  margin: 0 5px;
  font-size: 20px;
`;

const Add = styled.div`
  font-size: 20px;
`;

const Button =styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;


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
