import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.subtle};
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius.round};
  margin-right: 12px;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.borderLight};
  transition: transform ${props => props.theme.transitions.normal};
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.theme.colors.lightGrayWarm};
  padding: 10px 8px 10px 12px;
  border-radius: ${props => props.theme.borderRadius.medium};
  position: relative;
  border: 2px solid ${props => 
    props['data-filtering'] === 'true'
      ? props.theme.colors.primary
      : props.theme.colors.borderLight
  };
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  min-width: 0;
  overflow: visible;
  
  @media (min-width: 768px) {
    gap: 12px;
    padding: 12px 12px 12px 16px;
  }
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.card};
    background-color: ${props => props.theme.colors.background};
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
  cursor: pointer;
  
  ${SearchBar}:hover & {
    transform: scale(1.1);
  }
`;

export const StyledDatePickerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
  pointer-events: none;
  
  .react-datepicker-wrapper {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }
  
  .react-datepicker__input-container {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }
`;

export const CustomDateInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: auto;
  font-size: 0;
  background: transparent;
  
  &:focus {
    outline: none;
  }
`;

export const DateDisplay = styled.div`
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  pointer-events: none;
  transition: all ${props => props.theme.transitions.normal};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &[data-filtering="true"] {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fonts.weight.semibold};
  }
  
  @media (min-width: 768px) {
    font-size: 15px;
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
  padding: 6px;
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.colors.textSecondary};
  transition: all ${props => props.theme.transitions.normal};
  flex-shrink: 0;
  min-width: 30px;
  min-height: 30px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: block;
    pointer-events: none;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.primary};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
