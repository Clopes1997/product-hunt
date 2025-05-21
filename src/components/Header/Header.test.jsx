import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';

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
  borderRadius: {
    small: '4px',
    medium: '8px'
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

describe('Header component', () => {
  // Mock the filter and clear functions
  const mockOnDateFilter = jest.fn();
  const mockClearDateFilter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('renders profile image and date display', () => {
    renderWithTheme(
      <Header 
        onDateFilter={mockOnDateFilter} 
        clearDateFilter={mockClearDateFilter} 
      />
    );
    
    // Check if profile image is rendered
    const profileImg = screen.getByAltText('Profile');
    expect(profileImg).toBeInTheDocument();
    
    // Check if date display is initially showing today's date
    const dateText = screen.getByText(/Today/i);
    expect(dateText).toBeInTheDocument();
  });

  test('handles date selection and filtering', () => {
    renderWithTheme(
      <Header 
        onDateFilter={mockOnDateFilter} 
        clearDateFilter={mockClearDateFilter} 
      />
    );

    // Get the date input and search icon
    const dateInput = screen.getByRole('textbox', { hidden: true });
    const searchIcon = screen.getByRole('img', { hidden: true }) || 
                      screen.getByText(node => node.textContent === '');
    
    // Set date value and trigger change event
    fireEvent.change(dateInput, { target: { value: '2023-05-15' } });
    
    // Click search icon to filter by date
    fireEvent.click(searchIcon);
    
    // Verify onDateFilter was called with correct value
    expect(mockOnDateFilter).toHaveBeenCalledWith('2023-05-15');
  });

  test('allows clearing date filter', () => {
    // Render with filtering already active
    renderWithTheme(
      <Header 
        onDateFilter={mockOnDateFilter} 
        clearDateFilter={mockClearDateFilter} 
      />
    );

    const searchIcon = screen.getByRole('img', { hidden: true }) || 
                      screen.getByText(node => node.textContent === '');
    
    // Set a date first
    const dateInput = screen.getByRole('textbox', { hidden: true });
    fireEvent.change(dateInput, { target: { value: '2023-05-15' } });
    fireEvent.click(searchIcon);
    
    // Now clear the filter by clicking again
    fireEvent.click(searchIcon);
    
    // Verify clearDateFilter was called
    expect(mockClearDateFilter).toHaveBeenCalled();
  });
});