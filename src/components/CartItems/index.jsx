import { formatPrice } from '../../../utils/formatPrice';
import { Table } from '../Table';
import { useCart } from '../../hooks/CartContext';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg'


export function CartItems() {
  const { cartProducts, increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } = useCart();
  console.log(cartProducts);
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map(product => (
          <Table.Tr key={product.id}>
            <Table.Td>
              <ProductImage src={product.url} />
            </Table.Td>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.currencyValue}</Table.Td>
            <Table.Td>
              <ButtonGroup>
                <button onClick={() => decreaseProductQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseProductQuantity(product.id)}>+</button>
              </ButtonGroup>
              </Table.Td>
            <Table.Td>
              <ProductTotalPrice>
                {formatPrice(product.quantity * product.price)}
              </ProductTotalPrice>
            </Table.Td>
            <Table.Td>
              <TrashImage 
              alt="trash" 
              src={TrashIcon} 
              onClick={() => removeProductFromCart(product.id)} />
            </Table.Td>
          </Table.Tr>
        ))
      ) : <EmptyCart>Nenhum item no carrinho</EmptyCart>}</Table.Body>
    </Table.Root>
  );
};