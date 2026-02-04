import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import ProductList from '../components/ProductList/ProductList';
import useProducts from '../hooks/useProducts';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.backgroundWarm};
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

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
    <PageContainer>
      <Header onDateFilter={filterByDate} clearDateFilter={clearDateFilter} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollableContent>
        <ProductList
          products={products}
          loading={loading}
          error={error}
          loadMore={loadMore}
        />
      </ScrollableContent>
    </PageContainer>
  );
};

export default HomePage;
