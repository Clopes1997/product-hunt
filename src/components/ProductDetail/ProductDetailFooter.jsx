import React from 'react';
import Button from '../common/Button/Button';
import {
  FooterContainer,
  ButtonSeparator,
  UpvoteButton
} from './ProductDetail.styles';

const ProductDetailFooter = ({ product, onUpvote }) => {
  return (
    <FooterContainer>
      <Button primary>Get It</Button>
      <ButtonSeparator />
      <UpvoteButton 
        active={product.hasUpvoted} 
        onClick={onUpvote}
      >
        {product.hasUpvoted ? 'Upvoted' : `Upvote (${product.upvotes})`}
      </UpvoteButton>
    </FooterContainer>
  );
};

export default ProductDetailFooter; 