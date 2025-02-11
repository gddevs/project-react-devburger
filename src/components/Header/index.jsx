import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import {
  Container,
  HeaderLink,
  LinkContainer,
  Logout,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo} = useUser();

  const { pathname } = useResolvedPath();

  function handleLogout() {
    logout();
    navigate('/login');
  }
 
  console.log(userInfo);
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#FFFFFF" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={handleLogout}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#FFFFFF" size={24} />
            <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
