import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    max-width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3fe;
    position: relative;
    overflow: hidden;
    padding: 5px;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circule = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        background-color: #c3cefb;
        transform: scale(1.1);
    }
`;


export {
    Info,
    Container,
    Circule,
    Image,
    Icon,
}