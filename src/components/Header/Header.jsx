import React, { useState, useEffect, useCallback, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  HeaderContainer,
  ProfileImage,
  SearchBar,
  SearchIcon,
  DateDisplay,
  CalendarIcon,
  FilterLabel,
  FilterBadge,
  StyledDatePickerWrapper,
  CustomDateInput
} from './Header.styles';

const Header = ({ onDateFilter, clearDateFilter }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayDate, setDisplayDate] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);

  const searchBarRef = useRef(null);

  const getFormattedLabel = useCallback((date) => {
    if (!date) return '';

    const d = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    d.setHours(0, 0, 0, 0);

    const formatted = d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });

    if (d.getTime() === today.getTime()) return `Today, ${formatted}`;
    if (d.getTime() === yesterday.getTime()) return `Yesterday, ${formatted}`;
    return formatted;
  }, []);

  useEffect(() => {
    setDisplayDate(getFormattedLabel(new Date()));
  }, [getFormattedLabel]);

  const formatDateForFilter = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setDisplayDate(getFormattedLabel(date));
      setIsFiltering(true);
      onDateFilter(formatDateForFilter(date));
    }
  };

  const handleClearFilter = (e) => {
    e.stopPropagation();
    setSelectedDate(null);
    setDisplayDate(getFormattedLabel(new Date()));
    setIsFiltering(false);
    clearDateFilter();
  };

  const CustomInput = React.forwardRef(({ onClick }, ref) => (
    <CustomDateInput onClick={onClick} ref={ref} readOnly />
  ));

  return (
    <HeaderContainer>
      <ProfileImage src="https://placecats.com/40/40" alt="Profile" />

      <SearchBar ref={searchBarRef} data-filtering={isFiltering}>
        <FilterLabel></FilterLabel>

        <StyledDatePickerWrapper>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            dateFormat="MMMM d, yyyy"
            showPopperArrow={false}
            popperPlacement="bottom"
            shouldCloseOnSelect
            popperContainer={({ children }) => {
              if (!searchBarRef.current) return children;

              return (
                <div
                  style={{
                    position: 'absolute',
                    top: searchBarRef.current.offsetHeight + 8,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 9999,
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{ pointerEvents: 'auto' }}>
                    {children}
                  </div>
                </div>
              );
            }}
          />
        </StyledDatePickerWrapper>

        <CalendarIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </CalendarIcon>

        <DateDisplay data-filtering={isFiltering}>
          {displayDate}
        </DateDisplay>

        {isFiltering && <FilterBadge>Filtered</FilterBadge>}

        <SearchIcon onClick={handleClearFilter}>
          {isFiltering ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
        </SearchIcon>
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;
