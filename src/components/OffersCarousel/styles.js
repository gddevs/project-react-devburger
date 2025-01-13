import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 2px;
    top: 60px;
  }
  .react-multiple-carousel__arrow--right {
    right: 80px;
    top: 60px;
  }


  padding-left: 40px;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  
  font-weight: 800;
  font-size: 32px;
  color: #61A120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    /* border-radius: 10px; */
    
    background-color: #61A120;
    left: calc(50% - 28px);
    /* transform: translateX(-50%); */
    bottom: 0;
  }

`;





