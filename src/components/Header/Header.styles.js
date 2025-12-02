import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.subtle};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.round};
  margin-right: 16px;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.borderLight};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${props => props.theme.colors.lightGrayWarm};
  padding: 12px 16px;
  border-radius: ${props => props.theme.borderRadius.medium};
  position: relative;
  border: 2px solid ${props => 
    props['data-focused'] 
      ? props.theme.colors.primary 
      : props['data-filtering']
      ? props.theme.colors.primary
      : props.theme.colors.borderLight
  };
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.card};
    background-color: ${props => props.theme.colors.background};
  }
  
  &[data-focused="true"] {
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.shadows.focus};
  }
  
  &[data-filtering="true"] {
    background-color: ${props => props.theme.colors.primaryLight};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const FilterLabel = styled.span`
  font-size: 12px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  display: none;
  
  @media (min-width: 480px) {
    display: block;
  }
`;

export const CalendarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  flex-shrink: 0;
  transition: transform ${props => props.theme.transitions.normal};
  
  ${SearchBar}:hover & {
    transform: scale(1.1);
  }
`;

export const DateInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
  
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    padding: 0;
  }
  
  /* Custom calendar styles for browsers that support it */
  &::-webkit-calendar-picker {
    background-color: white;
    border-radius: ${props => props.theme.borderRadius.medium};
    box-shadow: ${props => props.theme.shadows.dropdown};
    border: 1px solid ${props => props.theme.colors.border};
    padding: 12px;
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-clear-button {
    display: none;
  }
`;

export const DateDisplay = styled.div`
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  font-weight: ${props => props['data-filtering'] ? props.theme.fonts.weight.semibold : props.theme.fonts.weight.medium};
  pointer-events: none;
  opacity: ${props => props['data-active'] ? '1' : '0.6'};
  transition: all ${props => props.theme.transitions.normal};
  
  &[data-filtering="true"] {
    color: ${props => props.theme.colors.primary};
  }
`;

export const FilterBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 11px;
  font-weight: ${props => props.theme.fonts.weight.semibold};
  border-radius: ${props => props.theme.borderRadius.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: fadeIn ${props => props.theme.transitions.normal} ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  padding: 8px;
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.colors.textSecondary};
  transition: all ${props => props.theme.transitions.normal};
  flex-shrink: 0;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.primary};
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
