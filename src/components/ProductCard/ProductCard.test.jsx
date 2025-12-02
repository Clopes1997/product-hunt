import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProductCard from './ProductCard';

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

const mockProduct = {
  id: 1,
  name: 'Test Product',
  tagline: 'This is a test product description',
  logo: 'https://via.placeholder.com/60',
  upvotes: 123
};

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      <HashRouter>
        {component}
      </HashRouter>
    </ThemeProvider>
  );
};

describe('ProductCard component', () => {
  test('renders product information correctly', () => {
    renderWithTheme(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product description')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product logo')).toBeInTheDocument();
  });
});