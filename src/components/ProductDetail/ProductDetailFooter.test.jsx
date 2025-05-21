import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProductDetailFooter from './ProductDetailFooter';

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
  }
};

/**
 * Helper function to render components with the styled-components theme
 * @param {ReactElement} component - The React component to render
 * @returns {RenderResult} - The rendered component with theme context
 */
const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('ProductDetailFooter component', () => {
  // Test data setup
  const mockProduct = {
    id: 1,
    hasUpvoted: false,
    upvotes: 42
  };

  // Mock function for upvote handler
  const mockOnUpvote = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Get It button and upvote button', () => {
    renderWithTheme(
      <ProductDetailFooter 
        product={mockProduct}
        onUpvote={mockOnUpvote}
      />
    );

    // Check if both buttons are rendered
    expect(screen.getByText('Get It')).toBeInTheDocument();
    expect(screen.getByText('Upvote (42)')).toBeInTheDocument();
  });

  test('handles upvote click correctly', () => {
    renderWithTheme(
      <ProductDetailFooter 
        product={mockProduct}
        onUpvote={mockOnUpvote}
      />
    );

    // Click the upvote button
    const upvoteButton = screen.getByText('Upvote (42)');
    fireEvent.click(upvoteButton);

    // Verify the click handler was called
    expect(mockOnUpvote).toHaveBeenCalled();
  });

  test('displays correct text when product is already upvoted', () => {
    const upvotedProduct = {
      ...mockProduct,
      hasUpvoted: true
    };

    renderWithTheme(
      <ProductDetailFooter 
        product={upvotedProduct}
        onUpvote={mockOnUpvote}
      />
    );

    // Check if the upvote button shows the correct text
    expect(screen.getByText('Upvoted')).toBeInTheDocument();
  });
}); 