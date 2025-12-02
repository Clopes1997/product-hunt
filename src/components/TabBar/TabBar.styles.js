import styled from 'styled-components';

export const TabBarContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 2px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.subtle};
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 18px 0;
  font-weight: ${props => props.$active ? props.theme.fonts.weight.semibold : props.theme.fonts.weight.medium};
  font-size: 15px;
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  cursor: pointer;
  position: relative;
  transition: all ${props => props.theme.transitions.normal};
  user-select: none;
  
  &:hover {
    color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
    background-color: ${props => props.$active ? 'transparent' : props.theme.colors.lightGrayWarm};
  }
  
  &:active {
    transform: scale(0.98);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(${props => props.$active ? 1 : 0});
    width: 60%;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    border-radius: ${props => props.theme.borderRadius.small} ${props => props.theme.borderRadius.small} 0 0;
    transform-origin: center;
    transition: transform ${props => props.theme.transitions.spring};
  }
  
  ${props => props.$active && `
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${props.theme.colors.primaryLight};
      opacity: 0.3;
      z-index: -1;
    }
  `}
`;
