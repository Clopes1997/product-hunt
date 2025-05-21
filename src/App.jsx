import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

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
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  }
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