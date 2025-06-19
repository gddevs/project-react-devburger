
import Logo from '../../assets/Logo1.svg';
import { CartResume } from '../../components/CartResume';
import { CartItems } from '../../components/CartItems';
import { Container } from '../../containers/Cart/styles';
import { Banner } from '../../containers/Cart/styles';
import { Title } from '../../containers/Cart/styles';
import { Content } from '../../containers/Cart/styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>
      <Title>
        Checkout Pedido
      </Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}

// export default Cart;