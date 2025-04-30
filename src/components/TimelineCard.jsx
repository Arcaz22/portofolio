import React from 'react';

function TimelineCard({ year, experiences }) {
  return (
    <div className="mb-12">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
          >
            <div
              className="absolute -left-2 top-0 w-4 h-4 rounded-full"
              style={{ backgroundColor: 'var(--btn-color)' }}
            />
            <div className="mb-4">
              <h3
                className="text-2xl font-bold mb-2 font-['Rubik']"
                style={{ color: 'var(--text-color)' }}
              >
                {exp.title}
              </h3>
              <h4
                className="text-lg font-semibold font-['Roboto_Mono'] mb-1"
                style={{ color: 'var(--text-color)' }}
              >
                {exp.company}
              </h4>
              <p
                className="text-sm font-['Roboto_Mono'] mb-4"
                style={{ color: 'var(--secondary-text-color)' }}
              >
                {exp.dates}
              </p>
            </div>
            <ul className="list-disc ml-8 space-y-2">
              {exp.responsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm font-['Roboto_Mono']"
                  style={{ color: 'var(--secondary-text-color)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineCard;
