import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { CategoryButton, Container, ContainerItems, Title } from './styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }
  
    loadCategories();
  }, []);
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} $imageUrl={category.url}>
            <CategoryButton> {category.name} </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}
