import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProductList from './ProductList';

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
  },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
  }
};

const mockProducts = [
  {
    id: 1,
    name: 'Test Product 1',
    tagline: 'This is test product 1',
    logo: 'https://via.placeholder.com/60',
    upvotes: 123
  },
  {
    id: 2,
    name: 'Test Product 2',
    tagline: 'This is test product 2',
    logo: 'https://via.placeholder.com/60',
    upvotes: 456
  }
];

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('ProductList component', () => {
  test('renders loading state correctly', () => {
    renderWithTheme(<ProductList loading={true} products={[]} error={null} />);
    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    renderWithTheme(<ProductList loading={false} products={[]} error="Failed to load" />);
    expect(screen.getByText('Failed to load')).toBeInTheDocument();
  });

  test('renders product list correctly', () => {
    renderWithTheme(<ProductList loading={false} products={mockProducts} error={null} />);
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
  });
});