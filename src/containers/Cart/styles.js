import styled from 'styled-components';
import Texture from '../../assets/background-tela-carrinho.svg';
import BackgroundHome from '../../assets/Back-home.svg';

export const Container = styled.div`
  width: 100%;
  
  background: linear-gradient(
      rgba(255,255,255,0.2),
      rgba(255,255,255,0.2)
    ),
    url(${BackgroundHome});
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url(${Texture}) no-repeat center;
  background-size: cover;
  background-position: center;
  background-color: #1F1F1F;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 180px;

  img {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    height: 100px;
  }

`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  padding-bottom: 12px;
  color:#61a120;
  text-align: center;
  position: relative;


  &::after {
    position: absolute;
    content: '';
    width: 56px;
    height: 4px;
    border-radius: 10px;
    background-color: #61a120;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }


`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  max-width: 1280px;
  width: 100%;
  gap: 40px;
  padding: 40px;
  margin: 0 auto;

`;