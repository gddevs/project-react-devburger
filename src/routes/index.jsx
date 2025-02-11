import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart, Register, Login, Home, Menu  }  from '../containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
      <Login />
      <Footer />
      </>
    ),
  },
  {
    path: '/cadastro',
    element: (
      <>
      <Register />
      <Footer />
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: <Cart/>
  },
]);
