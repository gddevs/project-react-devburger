import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #FFFFFF;
    background-color: #9758a6;
    transition: all 0.4s;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #6f357c;
    }


  }

    
  
`;
export const EmptyCart = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #333;
  font-weight: bold;

`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
    cursor: pointer;
    height: 20px;
    width: 20px;
`;