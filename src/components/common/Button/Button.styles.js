import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  border: none;
  box-shadow: ${props => props.theme.shadows.button};
  
  ${props => props.primary ? `
    background-color: ${props.theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: #e55549;
    }
  ` : `
    background-color: ${props.theme.colors.lightGray};
    color: ${props.theme.colors.text};
    
    &:hover {
      background-color: #e9e9e9;
    }
  `}
`;