import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import { sliderItems } from '../data';

import { SliderStyles } from '../styles';

const {
    Container,
    Arrow,
    Wrapper,
    ImgContainer,
    Image,
    Slide,
    Title,
    InfoContainer,
    Description,
    Button} = SliderStyles;



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex> 0 ? slideIndex -1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewOutlinedIcon style={{fontSize: "14px"}} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => {
                    return (
                        <Slide key={item.id} bg={item.bg}>
                            <ImgContainer>
                                <Image src={item.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlinedIcon style={{fontSize: "14px"}} />
            </Arrow>
        </Container>
    )
}

export default Slider;