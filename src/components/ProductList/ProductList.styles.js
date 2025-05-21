import styled from 'styled-components';

export const ProductListContainer = styled.div`
  padding: 8px 0;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 32px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 32px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;