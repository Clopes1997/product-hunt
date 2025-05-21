import React, { useRef, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductListContainer, LoadingMessage, ErrorMessage } from './ProductList.styles';

const ProductList = ({ products, loading, error, loadMore }) => {
  const observer = useRef();
  const lastProductRef = useRef();

  // Setup intersection observer for infinite scrolling
  useEffect(() => {
    // Disconnect previous observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create new observer
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        loadMore();
      }
    }, { threshold: 0.5 });

    // Observe the last product element
    if (lastProductRef.current) {
      observer.current.observe(lastProductRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, loadMore, products.length]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (loading && products.length === 0) {
    return <LoadingMessage>Loading products...</LoadingMessage>;
  }

  return (
    <ProductListContainer>
      {products.map((product, index) => {
        // Attach ref to the last product for infinite scrolling
        if (index === products.length - 1) {
          return (
            <div key={product.id} ref={lastProductRef}>
              <ProductCard product={product} />
            </div>
          );
        } else {
          return <ProductCard key={product.id} product={product} />;
        }
      })}
      {loading && products.length > 0 && (
        <LoadingMessage>Loading more products...</LoadingMessage>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
