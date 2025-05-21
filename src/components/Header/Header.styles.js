import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGray};
  padding: 8px 16px;
  border-radius: 8px;
  position: relative;
  border: ${props => props['data-focused'] ? `2px solid ${props.theme.colors.primary}` : 'none'};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid ${props => props.theme.colors.lightGray};
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
  font-size: 14px;
  pointer-events: none;
  opacity: ${props => props['data-active'] ? '1' : '0.5'};
  font-weight: ${props => props['data-active'] ? '500' : '400'};
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  padding: 6px;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
