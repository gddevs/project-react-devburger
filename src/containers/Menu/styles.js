import styled from 'styled-components';
import LogoCardapio from '../../assets/imagem-cardapio.svg';
import BackgroundHome from '../../assets/Back-home.svg';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F0F0F0;

  background: linear-gradient(
      rgba(255,255,255,0.2),
      rgba(255,255,255,0.2)
    ),
    url(${BackgroundHome});
`;

export const Banner = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  width: 100%;
  position: relative;
  

  background: url(${LogoCardapio}) no-repeat;
  background-color: #1F1F1F;
  background-position: center;
  
  
  h1 {
    font-family: Road Rage, sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #f4f4f4;
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: #f4f0f4;
      font-family: Poppins, sans-serif;
      font-size: 20px;
      font-weight: 400;
    }
  }  
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory  ? '#9758A6' : '#FF8C00')};
    font-size: 22px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: ${(props) => (props.$isActiveCategory && '3px solid #9758A6')};  
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;

