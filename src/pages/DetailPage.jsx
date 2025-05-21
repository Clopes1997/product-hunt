import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import useProducts from '../hooks/useProducts';

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
    return <div>Loading product details...</div>;
  }

  if (isError || !product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailPage;
