import React from 'react';
import { BadgeContainer, BadgeIcon, BadgeText, BadgeInfo, BadgeDate } from './Badge.styles';

const Badge = ({ text, daysAgo }) => {
  const formatDaysAgo = (days) => {
        
    if (!days && days !== 0) return '';
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  return (
    <BadgeContainer>
      <BadgeIcon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#4b587c" strokeWidth="2" fill="none"/>
          <text x="12" y="16" fontFamily="Arial" fontSize="10" fill="#4b587c" textAnchor="middle">2</text>
        </svg>
      </BadgeIcon>
      <BadgeInfo>
        <BadgeText>{text}</BadgeText>
        <BadgeDate>{formatDaysAgo(daysAgo)}</BadgeDate>
      </BadgeInfo>
    </BadgeContainer>
  );
};

export default Badge;