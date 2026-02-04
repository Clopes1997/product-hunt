import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ProductListContainer = styled.div`
  padding: 12px 16px;
  max-width: 100%;
  padding-bottom: 20px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 48px 32px;
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  
  &::before {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid ${props => props.theme.colors.lightGray};
    border-top-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.round};
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 48px 32px;
  margin: 24px;
  background: ${props => props.theme.colors.primaryLight};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fonts.weight.semibold};
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '⚠️';
    font-size: 32px;
  }
`;