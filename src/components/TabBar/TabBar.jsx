import React from 'react';
import { TabBarContainer, Tab } from './TabBar.styles';

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <TabBarContainer>
      <Tab
        $active={activeTab === 'popular'}
        onClick={() => setActiveTab('popular')}
      >
        Popular
      </Tab>
      <Tab
        $active={activeTab === 'newest'}
        onClick={() => setActiveTab('newest')}
      >
        Newest
      </Tab>
    </TabBarContainer>
  );
};

export default TabBar;
