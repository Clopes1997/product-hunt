import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Badge from './Badge';

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

describe('Badge component', () => {
  test('renders badge text correctly', () => {
    const badgeText = 'Featured Product';
    renderWithTheme(<Badge text={badgeText} />);
    expect(screen.getByText(badgeText)).toBeInTheDocument();
  });

  test('formats days ago text correctly - Today', () => {
    renderWithTheme(<Badge text="Test" daysAgo={0} />);
    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  test('formats days ago text correctly - Yesterday', () => {
    renderWithTheme(<Badge text="Test" daysAgo={1} />);
    expect(screen.getByText('Yesterday')).toBeInTheDocument();
  });

  test('formats days ago text correctly - Multiple days', () => {
    renderWithTheme(<Badge text="Test" daysAgo={5} />);
    expect(screen.getByText('5 days ago')).toBeInTheDocument();
  });

  test('handles missing daysAgo prop', () => {
    renderWithTheme(<Badge text="Test" />);
    // Should not display any date text when daysAgo is not provided
    expect(screen.queryByText(/days ago/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Today')).not.toBeInTheDocument();
    expect(screen.queryByText('Yesterday')).not.toBeInTheDocument();
  });

  test('renders badge icon', () => {
    renderWithTheme(<Badge text="Test" />);
    // Check if SVG icon is rendered
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
}); 