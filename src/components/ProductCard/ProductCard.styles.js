import styled from 'styled-components';

export const hashCode = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// Define all components first
export const LogoContainer = styled.div`
  margin-right: 16px;
  flex-shrink: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: ${props => props.theme.borderRadius.medium};
    background: ${props => props.theme.gradients.primary};
    opacity: 0;
    transition: opacity ${props => props.theme.transitions.normal};
    z-index: -1;
  }
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.medium};
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.borderLight};
  transition: all ${props => props.theme.transitions.normal};
  
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fonts.weight.semibold};
  transition: color ${props => props.theme.transitions.fast};
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 6px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 13px;
  color: ${props => props.theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const UpvoteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.$highlight ? 'white' : props.theme.colors.textSecondary};
  background-color: ${props =>
    props.$highlight
      ? props.theme.colors.primary
      : props.theme.colors.lightGrayWarm};
  border: 1px solid ${props => 
    props.$highlight 
      ? props.theme.colors.primary 
      : props.theme.colors.borderLight
  };
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 8px 12px;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  min-width: 56px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 10px 14px;
    min-width: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.gradients.primary};
    opacity: 0;
    transition: opacity ${props => props.theme.transitions.normal};
  }

  &:hover {
    background-color: ${props => 
      props.$highlight 
        ? props.theme.colors.primaryHover 
        : props.theme.colors.primary
    };
    color: white;
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px) scale(1.05);
    box-shadow: ${props => props.theme.shadows.buttonHover};
    
    &::before {
      opacity: ${props => props.$highlight ? '0' : '1'};
    }
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  ${props =>
    props.$highlight &&
    `
      box-shadow: ${props.theme.shadows.button};
      
      &:hover {
        box-shadow: ${props.theme.shadows.buttonHover};
      }
    `}
`;

export const UpvoteCount = styled.span`
  font-size: 13px;
  margin-top: 4px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  letter-spacing: -0.01em;
`;

// Define ProductCardContainer last so it can reference the child components
export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
  margin-bottom: 12px;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.card};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.theme.gradients.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${props => props.theme.transitions.normal};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.cardHover};
    border-color: ${props => props.theme.colors.primary};
    background: linear-gradient(to right, ${props => props.theme.colors.background} 0%, ${props => props.theme.colors.primaryLight} 100%);
    
    &::before {
      transform: scaleX(1);
    }
    
    ${LogoContainer}::after {
      opacity: 0.1;
    }
    
    ${LogoImage} {
      transform: scale(1.05);
      border-color: ${props => props.theme.colors.primary};
      box-shadow: ${props => props.theme.shadows.card};
    }
    
    ${ProductName} {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;
