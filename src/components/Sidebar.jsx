import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { GiJourney } from 'react-icons/gi';
import { Tooltip } from 'react-tooltip';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'projects', 'contact'];
      const currentSection = sections.find((section) => {
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
    <>
      {/* Hamburger Menu Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ backgroundColor: 'var(--btn-color)' }}
      >
        {isMenuOpen ? (
          <FaTimes className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        ) : (
          <FaBars className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg flex items-center gap-3
              ${activeSection === 'hero' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <FaUser className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
            <span style={{ color: 'var(--btn-text-color)' }}>About</span>
          </button>

          <button
            onClick={() => scrollToSection('journey')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg flex items-center gap-3
              ${activeSection === 'journey' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <GiJourney className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
            <span style={{ color: 'var(--btn-text-color)' }}>Journey</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg flex items-center gap-3
              ${activeSection === 'contact' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <FaEnvelope className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
            <span style={{ color: 'var(--btn-text-color)' }}>Contact</span>
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 p-3 rounded-2xl">
        <div className="flex flex-col gap-8 items-center">
          <button
            data-tooltip-id="sidebar-tooltip"
            data-tooltip-content="About"
            onClick={() => scrollToSection('hero')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg
              ${activeSection === 'hero' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <FaUser className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
          </button>

          <button
            data-tooltip-id="sidebar-tooltip"
            data-tooltip-content="Journey"
            onClick={() => scrollToSection('journey')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg
              ${activeSection === 'journey' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <GiJourney className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
          </button>

          <button
            data-tooltip-id="sidebar-tooltip"
            data-tooltip-content="Contact"
            onClick={() => scrollToSection('contact')}
            className={`p-3 rounded-full transition-all hover:scale-110 hover:shadow-lg
              ${activeSection === 'contact' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: 'var(--btn-color)' }}
          >
            <FaEnvelope className="text-xl" style={{ color: 'var(--btn-text-color)' }} />
          </button>
        </div>

        <Tooltip
          id="sidebar-tooltip"
          place="right"
          style={{
            backgroundColor: 'var(--btn-color)',
            color: 'var(--btn-text-color)',
            borderRadius: '0.375rem',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem'
          }}
        />
      </div>
    </>
  );
}

export default Sidebar;
