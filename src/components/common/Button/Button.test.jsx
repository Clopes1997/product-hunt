import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';

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

describe('Button component', () => {
  test('renders button with children content', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary styles when primary prop is true', () => {
    renderWithTheme(<Button primary>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    
    // Check if the button has the primary attribute
    expect(button).toHaveAttribute('data-primary', 'true');
  });

  test('applies default styles when primary prop is false', () => {
    renderWithTheme(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    
    // Check if the button doesn't have the primary attribute
    expect(button).not.toHaveAttribute('data-primary', 'true');
  });

  test('forwards additional props to button element', () => {
    renderWithTheme(
      <Button 
        type="submit" 
        disabled={true}
        data-testid="test-button"
      >
        Test Button
      </Button>
    );
    
    const button = screen.getByTestId('test-button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toBeDisabled();
  });
}); 