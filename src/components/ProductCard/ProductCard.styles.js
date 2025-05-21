import styled from 'styled-components';

export const hashCode = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
  margin-bottom: 1px;
  box-shadow: ${props => props.theme.shadows.card};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const LogoContainer = styled.div`
  margin-right: 16px;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.small};
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.text};
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

export const UpvoteButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
  background-color: ${props =>
    props.$highlight
      ? props.theme.colors.primary
      : props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #e9e9e9;
  }

  ${props =>
    props.$highlight &&
    `
      transform: scale(1.1);
      color: white;
    `}
`;

export const UpvoteCount = styled.span`
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;