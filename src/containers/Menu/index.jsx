import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
  ButtonReturn,
} from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import Seta from '../../assets/seta.svg';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  

  const[activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
    
  });
  const handleBack = () => {
    navigate('/home');
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(newCategories);
      
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistivel!</span>
        </h1>
      </Banner>
      
      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            $isActiveCategory={category.id === activeCategory}
            key={category.id}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
                
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>
      <ButtonReturn onClick={handleBack}> <img src={Seta} alt="Voltar" /> 
      </ButtonReturn>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
