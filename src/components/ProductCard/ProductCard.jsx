import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductCardContainer,
  LogoContainer,
  LogoImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  UpvoteButton,
  UpvoteCount,
  hashCode
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const highlight = (hashCode(product.id) % 10) < 3; // ~30% chance

  return (
    <Link to={`/product/${product.id}`}>
      <ProductCardContainer>
        <LogoContainer>
          <LogoImage src={product.thumbnail} alt={`${product.name} logo`} />
        </LogoContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.tagline}</ProductDescription>
        </ProductInfo>
        <UpvoteButton $highlight={highlight}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 11L12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <UpvoteCount>{product.upvotes}</UpvoteCount>
        </UpvoteButton>
      </ProductCardContainer>
    </Link>
  );
};

export default ProductCard;
