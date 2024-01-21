import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContentMui from '@mui/material/CardContent'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Sweater from '../../pics/sweater.webp';
import shirt from '../../pics/shirt.webp';
import shirt2 from '../../pics/shirt2.png';
import shirt3 from '../../pics/shirt3.png';
import shirt4 from '../../pics/shirt4.jpg';
import shirt5 from '../../pics/shirt5.jpg';
import shirt6 from '../../pics/shirt6.jpg';
import shirt7 from '../../pics/shirt7.png';
import shirt8 from '../../pics/shirt8.jpg';
import jeans from '../../pics/jeans.webp';
import jacket from '../../pics/jacket.jpg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  width: 80%; 
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCard = styled(Card)`
  width: 250px;
  background-color: teal;
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: white;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.2); 
  }
`;

const CustomCardContent = styled(CardContentMui)`
  width: auto;
`;

const products = [
  {
    "id": 1,
    "name": "Striped T-Shirt",
    "description": "A comfortable striped t-shirt for a casual look.",
    "image": Sweater,
    "variants": [
      {"color": "Red", "size": "S", "price": 19.99},
      {"color": "Blue", "size": "M", "price": 19.99},
      {"color": "Green", "size": "L", "price": 19.99}
    ]
  },
  {
    "id": 2,
    "name": "Modern Slim Jeans",
    "description": "Modern slim fit jeans for a trendy appearance.",
    "image": jeans,
    "variants": [
      {"color": "Black", "size": "28", "price": 34.99},
      {"color": "Blue", "size": "30", "price": 34.99},
      {"color": "Gray", "size": "32", "price": 34.99}
    ]
  },
  {
    "id": 3,
    "name": "Classic Slim Fit Shirt",
    "description": "Classic slim fit shirt for a timeless style.",
    "image": shirt,
    "variants": [
      {"color": "Black", "size": "S", "price": 39.99},
      {"color": "Blue", "size": "M", "price": 39.99},
      {"color": "White", "size": "L", "price": 39.99}
    ]
  },
  {
    "id": 4,
    "name": "Casual Denim Jacket",
    "description": "Casual denim jacket for a relaxed and stylish look.",
    "image": jacket,
    "variants": [
      {"color": "Blue", "size": "M", "price": 49.99},
      {"color": "Black", "size": "L", "price": 49.99},
      {"color": "Brown", "size": "XL", "price": 49.99}
    ]
  },
  {
    "id": 5,
    "name": "Cotton V-Neck Sweater",
    "description": "Soft cotton v-neck sweater for a cozy feel.",
    "image": Sweater,
    "variants": [
      {"color": "Gray", "size": "M", "price": 29.99},
      {"color": "Navy", "size": "L", "price": 29.99},
      {"color": "Burgundy", "size": "XL", "price": 29.99}
    ]
  },
  {
    "id": 6,
    "name": "Stylish Bomber Jacket",
    "description": "Stylish bomber jacket for a modern and edgy look.",
    "image": shirt2,
    "variants": [
      {"color": "Black", "size": "S", "price": 59.99},
      {"color": "Green", "size": "M", "price": 59.99},
      {"color": "Brown", "size": "L", "price": 59.99}
    ]
  },
  {
    "id": 7,
    "name": "Printed Floral Shirt",
    "description": "Printed floral shirt for a vibrant and playful style.",
    "image": shirt4,
    "variants": [
      {"color": "White", "size": "S", "price": 44.99},
      {"color": "Blue", "size": "M", "price": 44.99},
      {"color": "Pink", "size": "L", "price": 44.99}
    ]
  },
  {
    "id": 8,
    "name": "Leather Moto Jacket",
    "description": "Leather moto jacket for a cool and rugged appearance.",
    "image": shirt6,
    "variants": [
      {"color": "Black", "size": "M", "price": 79.99},
      {"color": "Brown", "size": "L", "price": 79.99},
      {"color": "Gray", "size": "XL", "price": 79.99}
    ]
  },
  {
    "id": 9,
    "name": "Vintage Graphic Tee",
    "description": "Vintage graphic tee for a retro and casual look.",
    "image": shirt8,
    "variants": [
      {"color": "Gray", "size": "S", "price": 24.99},
      {"color": "Blue", "size": "M", "price": 24.99},
      {"color": "Red", "size": "L", "price": 24.99}
    ]
  },
  {
    "id": 10,
    "name": "Classic Bootcut Jeans",
    "description": "Classic bootcut jeans for a timeless and flattering fit.",
    "image": jeans,
    "variants": [
      {"color": "Blue", "size": "28", "price": 39.99},
      {"color": "Black", "size": "30", "price": 39.99},
      {"color": "Indigo", "size": "32", "price": 39.99}
    ]
  },
  {
    "id": 11,
    "name": "Quilted Puffer Jacket",
    "description": "Quilted puffer jacket for warmth and style in colder weather.",
    "image": jacket,
    "variants": [
      {"color": "Black", "size": "M", "price": 69.99},
      {"color": "Navy", "size": "L", "price": 69.99},
      {"color": "Burgundy", "size": "XL", "price": 69.99}
    ]
  },
  {
    "id": 12,
    "name": "Quilted Puffer Jacket",
    "description": "Vintage graphic tee for a retro and casual look.",
    "image": shirt3,
    "variants": [
      {"color": "Black", "size": "M", "price": 19.99},
      {"color": "Navy", "size": "L", "price": 19.99},
      {"color": "Burgundy", "size": "XL", "price": 19.99}
    ]
  },
  {
    "id": 13,
    "name": "Quilted Puffer Jacket",
    "description": "Quilted puffer jacket for warmth and style in colder weather.",
    "image": shirt5,
    "variants": [
      {"color": "Black", "size": "M", "price": 19.99},
      {"color": "Navy", "size": "L", "price": 19.99},
      {"color": "Burgundy", "size": "XL", "price": 19.99}
    ]
  },
  {
    "id": 14,
    "name": "Quilted Puffer Jacket",
    "description": "Printed floral shirt for a vibrant and playful style..",
    "image": shirt7,
    "variants": [
      {"color": "Black", "size": "M", "price": 39.99},
      {"color": "Navy", "size": "L", "price": 29.99},
      {"color": "Burgundy", "size": "XL", "price": 29.99}
    ]
  }
  
];



const BuyForm = () => {
  
  return (
    <Container>
      <Title>Buy</Title>

      <CardsContainer>
        {products.map(product => (
          <StyledCard key={product.id} sx={{ maxWidth: 300 }}>
            <Image src={product.image} alt={product.image} />
            <CustomCardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <div>
                <Typography variant="subtitle1" color="text.secondary">
                  Variants:
                </Typography>
                <ul>
                  {product.variants.map((variant, index) => (
                    <li key={index}>
                      {variant.color}, Size: {variant.size}, Price: ${variant.price}
                    </li>
                  ))}
                </ul>
              </div>
            </CustomCardContent>
            <CardActions>
              <Button size="small">Add To cart</Button>
            </CardActions>
          </StyledCard>
        ))}
      </CardsContainer>
    </Container>
  );
};


export default BuyForm;
