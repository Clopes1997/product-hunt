import React, { useState, useEffect, useCallback } from 'react';
import {
  HeaderContainer,
  ProfileImage,
  SearchBar,
  DateInput,
  SearchIcon,
  DateDisplay
} from './Header.styles';

const Header = ({ onDateFilter, clearDateFilter }) => {
  const [dateInput, setDateInput] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const parseDateInput = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day); // Local time, no timezone issues
  };

  const getFormattedLabel = useCallback((date) => {
    const inputDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const normalizedDate = new Date(inputDate);
    normalizedDate.setHours(0, 0, 0, 0);

    const options = { month: 'long', day: 'numeric' };
    const formatted = normalizedDate.toLocaleDateString('en-US', options);

    const isToday = normalizedDate.getTime() === today.getTime();
    const isYesterday = normalizedDate.getTime() === yesterday.getTime();

    if (isToday) return `Today, ${formatted}`;
    if (isYesterday) return `Yesterday, ${formatted}`;
    return formatted;
  }, []);

  useEffect(() => {
    setDisplayDate(getFormattedLabel(new Date()));
  }, [getFormattedLabel]);

  const handleDateSearch = () => {
    if (isFiltering) {
      setDateInput('');
      setDisplayDate(getFormattedLabel(new Date()));
      setIsFiltering(false);
      clearDateFilter();
    } else if (dateInput) {
      const selectedDate = parseDateInput(dateInput);
      setDisplayDate(getFormattedLabel(selectedDate));
      setIsFiltering(true);
      onDateFilter(dateInput);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDateInput(value);
    if (value) {
      const selectedDate = parseDateInput(value);
      setDisplayDate(getFormattedLabel(selectedDate));
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <HeaderContainer>
      <ProfileImage src="https://placecats.com/40/40" alt="Profile" />
      <SearchBar data-focused={isFocused}>
        <DateInput
          type="date"
          value={dateInput}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <DateDisplay data-active={!isFocused}>{displayDate}</DateDisplay>
        <SearchIcon onClick={handleDateSearch}>
          {isFiltering ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#6f6f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </SearchIcon>
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;
