import Cart from '../../assets/cart3.svg';
import { ContainerButton } from './styles';

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={Cart} alt='Carrinho de compras' />
    </ContainerButton>
  );
}