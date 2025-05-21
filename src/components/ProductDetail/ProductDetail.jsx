import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../common/Badge/Badge';
import ProductDetailFooter from './ProductDetailFooter';
import {
  ProductDetailContainer,
  BackButton,
  ProductImage,
  ProductHeader,
  ProductCategory,
  ProductTitle,
  ProductDescription,
  Options,
  ImagesContainer,
  ProductDetailContent,
  ProductLogo,
  ProductHeaderInfo,
  OptionsDropdown,
  OptionItem,
  MainProductImage,
} from './ProductDetail.styles';
import useProducts from '../../hooks/useProducts';

const ProductDetail = ({ product }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const containerRef = useRef(null);
  const { toggleUpvote } = useProducts();

  useEffect(() => {
    const checkIfAtBottom = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const buffer = 20; // Add a small buffer to trigger slightly before the actual bottom
      const atBottom = scrollTop + clientHeight >= scrollHeight - buffer;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', checkIfAtBottom);
    checkIfAtBottom(); // Check initial position

    return () => window.removeEventListener('scroll', checkIfAtBottom);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleUpvote = () => {
    toggleUpvote(product.id);
  };

  return (
    <ProductDetailContainer ref={containerRef}>
      <BackButton>
        <Link to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </BackButton>

      <Options onClick={toggleOptions}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="1" fill="black"/>
          <circle cx="12" cy="6" r="1" fill="black"/>
          <circle cx="12" cy="18" r="1" fill="black"/>
        </svg>
        
        {showOptions && (
          <OptionsDropdown>
            <OptionItem>Share</OptionItem>
            <OptionItem>Save to collection</OptionItem>
            <OptionItem>Report</OptionItem>
          </OptionsDropdown>
        )}
      </Options>

      <ProductDetailContent>
        <MainProductImage src={product.thumbnail} alt={product.name} />

        <ProductHeader>
          <ProductLogo src={product.thumbnail} alt={`${product.name} logo`} />
          <ProductHeaderInfo>
            <ProductCategory>{product.category}</ProductCategory>
            <ProductTitle>{product.name}</ProductTitle>
          </ProductHeaderInfo>
        </ProductHeader>

        <ProductDescription>
          {product.detailDescription || product.description}
        </ProductDescription>

        {product.badge && (
          <Badge text={product.badge.text} daysAgo={product.badge.daysAgo} />
        )}

        {product.images && product.images.length > 0 && (
          <ImagesContainer>
            {product.images.map((image, index) => (
              <ProductImage key={index} src={image} alt={`${product.name} screenshot ${index + 1}`} />
            ))}
          </ImagesContainer>
        )}
      </ProductDetailContent>

      <ProductDetailFooter 
        product={product} 
        onUpvote={handleUpvote}
        data-at-bottom={isAtBottom}
      />
    </ProductDetailContainer>
  );
};

export default ProductDetail;
