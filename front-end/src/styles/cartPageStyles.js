import styled from "styled-components";
import { mobile } from "./responsive";



const Container =styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Wrapper =styled.div`
  margin: 20px;
  ${mobile({ padding: '10px'})}
`;
const Title = styled.h1`
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
  ${mobile({ display: 'none'})}
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
  ${mobile({ flexDirection: 'column'})}
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
  ${mobile({ flexDirection: 'column'})}
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
  ${mobile({ margin: '5px 10px'})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ margin: '0 0 20px'})}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: 350px;
  ${mobile({ margin: '20px 0 10px'})}
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


export {
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
}