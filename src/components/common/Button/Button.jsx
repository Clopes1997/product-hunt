import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props['data-primary'] ? props.theme.colors.primary : 'white'};
  color: ${props => props['data-primary'] ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props['data-primary'] ? 'transparent' : props.theme.colors.lightGray};
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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