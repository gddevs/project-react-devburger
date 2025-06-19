import { Container } from './styles';
import { Button } from '../Button';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice }  from '../../../utils/formatPrice';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);
  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    try {
      const { status } = await api.post(
        '/orders', products, {
          validateStatus: () => true,
        });

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 409) {
        toast.error('Email Existente! Faça Login para Continuar');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no Sistema ! Tente Novamente');
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="itens">itens</p>
          <p className="itens-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Entrega</p>
          <p className="deliver-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button>Finalizar Pedido</Button>
    </div>
  );
}
