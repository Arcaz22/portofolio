import React from 'react';
import { FaSuitcase } from 'react-icons/fa';

function JourneyCard({ title, company, dates, responsibilities }) {
  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-center mr-6 relative">
        <div className="icon-container">
          <FaSuitcase className="text-2xl" />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-14 w-px h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-color)' }}>
          {title}
        </h3>
        <div
          className="text-gray-600 dark:text-gray-400 mb-2"
          style={{ color: 'var(--secondary-text-color)' }}
        >
          {company} | {dates}
        </div>
        <ul className="list-disc ml-5" style={{ color: 'var(--secondary-text-color)' }}>
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JourneyCard;
