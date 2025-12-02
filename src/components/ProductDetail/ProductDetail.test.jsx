import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProductDetail from './ProductDetail';

// Mock the useProducts hook
jest.mock('../../hooks/useProducts', () => ({
  __esModule: true,
  default: () => ({
    toggleUpvote: jest.fn()
  })
}));

// Mock theme configuration
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

/**
 * Helper function to render components with the styled-components theme and router
 * @param {ReactElement} component - The React component to render
 * @returns {RenderResult} - The rendered component with theme and router context
 */
const renderWithThemeAndRouter = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      <HashRouter>
        {component}
      </HashRouter>
    </ThemeProvider>
  );
};

describe('ProductDetail component', () => {
  // Test data setup
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    category: 'Test Category',
    description: 'Test description',
    detailDescription: 'Detailed test description',
    thumbnail: 'https://example.com/image.jpg',
    badge: {
      text: 'Featured',
      daysAgo: 2
    }
  };

  test('renders product not found message when no product provided', () => {
    renderWithThemeAndRouter(<ProductDetail product={null} />);
    expect(screen.getByText('Product not found')).toBeInTheDocument();
  });

  test('renders product details correctly', () => {
    renderWithThemeAndRouter(<ProductDetail product={mockProduct} />);

    // Check if main product information is displayed
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.detailDescription)).toBeInTheDocument();

    // Check if badge is rendered
    expect(screen.getByText(mockProduct.badge.text)).toBeInTheDocument();

    // Check if images are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2); // Logo and main product image
    expect(images[0]).toHaveAttribute('alt', `${mockProduct.name} logo`);
    expect(images[1]).toHaveAttribute('src', mockProduct.thumbnail);
  });

  test('toggles options dropdown when clicking options button', () => {
    renderWithThemeAndRouter(<ProductDetail product={mockProduct} />);

    // Options should not be visible initially
    expect(screen.queryByText('Share')).not.toBeInTheDocument();
    expect(screen.queryByText('Save to collection')).not.toBeInTheDocument();
    expect(screen.queryByText('Report')).not.toBeInTheDocument();

    // Click the options button (using the container since it's an SVG)
    const optionsButton = screen.getByRole('button', { name: /options/i }) || 
                         document.querySelector('[data-testid="options-button"]');
    fireEvent.click(optionsButton);

    // Options should now be visible
    expect(screen.getByText('Share')).toBeInTheDocument();
    expect(screen.getByText('Save to collection')).toBeInTheDocument();
    expect(screen.getByText('Report')).toBeInTheDocument();
  });

  test('renders back button with correct link', () => {
    renderWithThemeAndRouter(<ProductDetail product={mockProduct} />);
    
    const backButton = screen.getByRole('link');
    expect(backButton).toHaveAttribute('href', '/');
  });
}); 