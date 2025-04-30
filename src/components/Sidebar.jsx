import React, { useState, useEffect } from 'react';
import { FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import { GiJourney } from "react-icons/gi";

function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 p-3 rounded-2xl">
      <div className='flex flex-col gap-8 items-center'>
      <button
        onClick={() => scrollToSection('hero')}
        className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg relative group
          ${activeSection === 'hero' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        style={{ backgroundColor: 'var(--btn-color)' }}
        title="About"
      >
        <FaUser className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        <span
          className="absolute left-full ml-4 py-1 px-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
          style={{
            backgroundColor: 'var(--btn-color)',
            color: 'var(--btn-text-color)',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
          About
        </span>
      </button>

      <button
        onClick={() => scrollToSection('journey')}
        className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg relative group
          ${activeSection === 'journey' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        style={{ backgroundColor: 'var(--btn-color)' }}
        title="Journey"
      >
        <GiJourney className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        <span className="absolute left-full ml-4 py-1 px-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{
                backgroundColor: 'var(--btn-color)',
                color: 'var(--btn-text-color)',
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
          Journey
        </span>
      </button>

      {/* <button
        onClick={() => scrollToSection('projects')}
        className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg relative group
          ${activeSection === 'projects' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        style={{ backgroundColor: 'var(--btn-color)' }}
        title="Projects"
      >
        <FaCode className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        <span className="absolute left-full ml-4 py-1 px-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{
                backgroundColor: 'var(--btn-color)',
                color: 'var(--btn-text-color)',
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
          Projects
        </span>
      </button> */}

      <button
        onClick={() => scrollToSection('contact')}
        className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg relative group
          ${activeSection === 'contact' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        style={{ backgroundColor: 'var(--btn-color)' }}
        title="Contact"
      >
        <FaEnvelope className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        <span className="absolute left-full ml-4 py-1 px-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{
                backgroundColor: 'var(--btn-color)',
                color: 'var(--btn-text-color)',
                top: '50%',
                transform: 'translateY(-50%)'
              }}>
          Contact
        </span>
      </button>
      </div>
    </div>
  );
}

export default Sidebar;
