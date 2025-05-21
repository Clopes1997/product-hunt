import React from 'react';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import ProductList from '../components/ProductList/ProductList';
import useProducts from '../hooks/useProducts';

const HomePage = () => {
  const {
    products,
    loading,
    error,
    activeTab,
    setActiveTab,
    loadMore,
    filterByDate,
    clearDateFilter,
  } = useProducts();

  return (
    <div>
      <Header onDateFilter={filterByDate} clearDateFilter={clearDateFilter} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductList
        products={products}
        loading={loading}
        error={error}
        loadMore={loadMore}
      />
    </div>
  );
};

export default HomePage;
