import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    padding-top: 20px;
    
  }
  padding-left: 40px;
`;

export const Title = styled.h2`
  
  font-size: 24px;
  font-weight: bold;
  font-size: 32px;
  color: #9758a6;
  padding-bottom: 20px;
  position: relative;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    border-radius: 10px;
    
    background-color: #9758a6;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;

export const ContainerItems = styled.div`
  background: url(${(props) => props.$imageUrl}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;

  display: flex;
  align-items: center;
  padding: 20px 30px;
  margin-top: 40px;
  width: 95%;
  height: 290px;
  font-size: 18px;
  font-weight: 400;
  
  p {
    
  }
`;

export const CategoryButton = styled(Link)`
  color: #f4f4f4;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  margin-top: 50px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 22px;
  text-decoration: none;

  &:hover {
    background-color: #9758a6;
  }
`;

