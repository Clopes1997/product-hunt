import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props['data-primary'] ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props => props['data-primary'] ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props['data-primary'] ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 14px 28px;
  font-size: 15px;
  font-weight: ${props => props.theme.fonts.weight.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.gradients.primary};
    opacity: ${props => props['data-primary'] ? '1' : '0'};
    transition: opacity ${props => props.theme.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.buttonHover};
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props['data-primary'] ? props.theme.colors.primaryHover : props.theme.colors.primary};
    color: white;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const Button = ({ children, primary, ...props }) => {
  return (
    <ButtonComponent data-primary={primary} {...props}>
      {children}
    </ButtonComponent>
  );
};

export default Button;