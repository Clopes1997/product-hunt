import styled from 'styled-components';

export const TabBarContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 16px 0;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(${props => props.$active ? 1 : 0});
    transform-origin: center;
    transition: transform 0.3s ease;
  }
`;
