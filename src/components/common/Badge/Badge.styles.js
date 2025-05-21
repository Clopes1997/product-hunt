import styled from 'styled-components';

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-top: 16px;
`;

export const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const BadgeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BadgeText = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

export const BadgeDate = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: 2px;
`;