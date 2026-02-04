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
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.backgroundWarm};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    letter-spacing: -0.01em;
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    text-rendering: optimizeLegibility;

    overflow-x: hidden;
  }

   #root {
    width: 100%;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    line-height: 1.6;
    letter-spacing: -0.01em;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
    transition: all ${({ theme }) => theme.transitions.normal};

    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.focus};
    }
  }

  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrayWarm};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  /* ===== React DatePicker — App Theme ===== */

  .react-datepicker-popper {
    z-index: 10 !important;
  }

  .app-calendar {
    font-family: ${({ theme }) => theme.fonts.main};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.shadows.dropdown};
    background: ${({ theme }) => theme.colors.background};
    padding: 12px;
  }

  .app-calendar .react-datepicker__header {
    background: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
    padding-bottom: 10px;
  }

  .app-calendar .react-datepicker__current-month {
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
  }

  .app-calendar .react-datepicker__day-name {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .app-calendar .react-datepicker__month {
    margin: 8px 0;
  }

  .app-calendar .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }

  .app-calendar .react-datepicker__day {
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all ${({ theme }) => theme.transitions.fast};
    cursor: pointer;
  }

  .app-calendar .react-datepicker__day:hover {
    background: ${({ theme }) => theme.colors.lightGrayWarm};
  }

  .app-calendar .react-datepicker__day--selected {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  }

  .app-calendar .react-datepicker__day--today:not(.react-datepicker__day--selected) {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  }

  .app-calendar .react-datepicker__navigation:hover {
    background: ${({ theme }) => theme.colors.lightGrayWarm};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

export default GlobalStyles;
