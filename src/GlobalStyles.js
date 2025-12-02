import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.backgroundWarm};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    letter-spacing: -0.01em;
    font-weight: ${props => props.theme.fonts.weight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.fonts.weight.bold};
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.text};
  }

  p {
    line-height: 1.6;
    letter-spacing: -0.01em;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${props => props.theme.transitions.fast};
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
    font-weight: ${props => props.theme.fonts.weight.medium};
    transition: all ${props => props.theme.transitions.normal};
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: all ${props => props.theme.transitions.normal};
    
    &:focus {
      outline: none;
      box-shadow: ${props => props.theme.shadows.focus};
    }
  }

  /* Modern focus states for accessibility */
  *:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
    border-radius: ${props => props.theme.borderRadius.small};
  }

  /* Smooth transitions for interactive elements */
  button, a, input, select {
    transition: all ${props => props.theme.transitions.normal};
  }

  /* Better selection styling */
  ::selection {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primary};
  }

  /* Scrollbar styling for modern browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightGrayWarm};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${props => props.theme.colors.textSecondary};
    }
  }
`;

export default GlobalStyles;