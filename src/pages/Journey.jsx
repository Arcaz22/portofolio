
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../assets/styles/App.css';

function JourneyPage() {
  const years = Object.keys(groupedExperiences || {2023: [], 2024: []});
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <section
      id="journey"
      className="flex flex-col items-center justify-center min-h-screen w-full p-6"
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)'
      }}
    >
      <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-color)' }}>
        Journey
      </h1>
      <div className="flex gap-4 mb-8">
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded transition-colors duration-200 ${selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="w-full max-w-2xl min-h-[300px] relative overflow-hidden">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={selectedYear}
            timeout={400}
            classNames="fade"
            unmountOnExit
            appear
          >
            <div className="absolute w-full h-full top-0 left-0">
              {selectedYear && groupedExperiences[selectedYear] && (
                <TimelineCard year={selectedYear} experiences={groupedExperiences[selectedYear]} />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </section>
  );
}

export default JourneyPage;
