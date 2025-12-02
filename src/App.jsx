import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const theme = {
  colors: {
    primary: '#ff6154',
    primaryHover: '#e55549',
    primaryLight: '#fff5f4',
    secondary: '#4b587c',
    background: '#ffffff',
    backgroundWarm: '#faf9f7',
    lightGray: '#f3f3f4',
    lightGrayWarm: '#f7f6f4',
    border: '#e8e6e3',
    borderLight: '#f0eeeb',
    text: '#1a1a1a',
    textSecondary: '#6f6f6f',
    textTertiary: '#9b9b9b',
    accent: '#ff8c42',
    accentLight: '#fff4ed',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
  },
  fonts: {
    main: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, 0.08)',
    cardHover: '0 4px 16px rgba(0, 0, 0, 0.12)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
    buttonHover: '0 4px 8px rgba(0, 0, 0, 0.15)',
    dropdown: '0 4px 20px rgba(0, 0, 0, 0.15)',
    focus: '0 0 0 3px rgba(255, 97, 84, 0.2)',
    subtle: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: {
    small: '6px',
    medium: '10px',
    large: '16px',
    round: '50%',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
    spring: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff6154 0%, #ff8c42 100%)',
    warm: 'linear-gradient(135deg, #fff5f4 0%, #fff4ed 100%)',
    subtle: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;