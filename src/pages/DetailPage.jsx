import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import useProducts from '../hooks/useProducts';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 48px;
  gap: 24px;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${props => props.theme.colors.lightGray};
  border-top-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.round};
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.fonts.weight.medium};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 48px;
  gap: 16px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  margin-bottom: 8px;
`;

const ErrorTitle = styled.h2`
  font-size: 24px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const ErrorText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 0 24px 0;
  line-height: 1.6;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: ${props => props.theme.fonts.weight.semibold};
  font-size: 15px;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.buttonHover};
  }
`;

const DetailPage = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      setLoading(true);
      setIsError(false);
      try {
        const foundProduct = await getProductById(id);
        if (isMounted) {
          setProduct(foundProduct);
          setIsError(!foundProduct);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
        if (isMounted) {
          setProduct(null);
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id, getProductById]);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
        <LoadingText>Loading product details...</LoadingText>
      </LoadingContainer>
    );
  }

  if (isError || !product) {
    return (
      <ErrorContainer>
        <ErrorIcon>🔍</ErrorIcon>
        <ErrorTitle>Product not found</ErrorTitle>
        <ErrorText>We couldn't find the product you're looking for.</ErrorText>
        <BackLink to="/">← Back to Home</BackLink>
      </ErrorContainer>
    );
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailPage;
