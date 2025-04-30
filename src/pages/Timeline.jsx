import React, { useState, useRef, useEffect } from 'react';
import TimelineCard from '../components/TimelineCard';
import experiences from '../data/experiences';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Timeline() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const years = [
    ...new Set(
      experiences.map((exp) => {
        const dates = exp.dates.split('-');
        const startDate = dates[0].trim().split(' ');
        return startDate[startDate.length - 1];
      })
    )
  ].sort((a, b) => a - b);

  const groupedExperiences = experiences.reduce((acc, exp) => {
    const dates = exp.dates.split('-');
    const startDate = dates[0].trim().split(' ');
    const year = startDate[startDate.length - 1];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(exp);
    return acc;
  }, {});

  useEffect(() => {
    if (!selectedYear && years.length > 0) {
      setSelectedYear(years[0]);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [years, selectedYear]);

  return (
    <section
      id="journey"
      className="flex flex-col items-center justify-center min-h-screen w-full py-16"
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)'
      }}
    >
      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
          Journey
        </h1>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            style={{
              backgroundColor: 'var(--btn-color)',
              color: 'var(--btn-text-color)'
            }}
          >
            <FaRegCalendarAlt className="text-lg" />
            <span>{selectedYear || 'Select Year'}</span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-40 rounded-lg shadow-lg z-10"
              style={{
                backgroundColor: 'var(--background-color)',
                border: '1px solid var(--btn-color)'
              }}
            >
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2
                    ${
                      selectedYear === year
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                    }`}
                  style={{
                    color: selectedYear === year ? '#ffffff' : 'var(--text-color)'
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-2xl">
        {selectedYear && groupedExperiences[selectedYear] && (
          <TimelineCard year={selectedYear} experiences={groupedExperiences[selectedYear]} />
        )}
      </div>
    </section>
  );
}

export default Timeline;
