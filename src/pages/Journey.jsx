import React from 'react';
import JourneyCard from '../components/JourneyCard';
import experiences from '../data/experiences';

function JourneyPage() {
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
      <div className="w-full max-w-2xl">
        {experiences.map((experience, index) => (
          <JourneyCard
            key={index}
            title={experience.title}
            company={experience.company}
            dates={experience.dates}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}

export default JourneyPage;
