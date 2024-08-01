import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full sm:w-60 md:w-64 lg:w-72 transform transition-transform hover:scale-105"
    >
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 h-full">
        <img
          className="w-32 h-32 mb-4 object-cover rounded-lg"
          src={src}
          alt={`${h3} logo`}
        />
        <h3 className="text-xl font-bold mb-2">{h3}</h3>
        <p className="text-sm text-gray-600">{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
