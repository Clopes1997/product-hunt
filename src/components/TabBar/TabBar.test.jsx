import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import TabBar from './TabBar';

const theme = {
  colors: {
    primary: '#ff6154',
    secondary: '#4b587c',
    background: '#ffffff',
    lightGray: '#f3f3f4',
    text: '#222222',
    textSecondary: '#6f6f6f',
  },
  fonts: {
    main: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  }
};

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('TabBar component', () => {
  test('renders tabs and handles clicks', () => {
    const setActiveTab = jest.fn();
    renderWithTheme(<TabBar activeTab="popular" setActiveTab={setActiveTab} />);
    
    const popularTab = screen.getByText('Popular');
    const newestTab = screen.getByText('Newest');
    
    expect(popularTab).toBeInTheDocument();
    expect(newestTab).toBeInTheDocument();
    
    fireEvent.click(newestTab);
    expect(setActiveTab).toHaveBeenCalledWith('newest');
  });
});