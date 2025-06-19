import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #ffffff;
  margin-bottom: 20px;

  * {
    color: #484848;
    font-weight: 500;
  }
  .container-top {
    display: grid;
    grid-gap: 10px 50%;
    grid-template-areas: 
    'title title'
    'itens itens-price'
    'delivery-tax deliver-tax-price';

    .title {
      grid-area: title;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: #484848;
      color: #ffffff;
      text-align: center;
      padding: 15px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      
      
    }

    .itens {
      grid-area: itens;
      padding-left: 20px;
      
    }

    .itens-price {
      grid-area: itens-price;
      padding-right: 10px;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }

    .deliver-tax-price {
      grid-area: deliver-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    font-weight: 700;
    font-size: 22px;
    padding: 0 20px 20px 20px;

    * {
      font-weight: 700;
    }

  }
`;

