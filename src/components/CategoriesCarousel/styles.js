import styled from "styled-components";


export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
    
  }

`;

export const Title = styled.h2`
  font-size: 32px;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;

`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}')
`;

