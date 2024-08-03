import React from 'react';
import heroImg from '../assets/images/profil.png';
import sun from '../assets/images/sun.svg';
import moon from '../assets/images/moon.svg';
import githubLight from '../assets/images/github-light.svg';
import githubDark from '../assets/images/github-dark.svg';
import linkedinLight from '../assets/images/linkedin-light.svg';
import linkedinDark from '../assets/images/linkedin-dark.svg';
import CV from '../assets/images/cv.pdf';
import { useTheme } from '../components/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center text-center md:text-left min-h-screen w-full p-6"
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
    >
      <div className="relative mb-8 md:mb-0 md:mr-8">
        <img
          src={heroImg}
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full mx-auto md:mx-0"
          alt="Profile picture of Chandra Arcychan Azfar"
        />
        <img
          className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          style={{
            top: '-10px',
            right: '-10px',
          }}
        />
      </div>
      <div className="flex flex-col items-center md:items-start max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-color)' }}>
          Chandra Arcychan Azfar
        </h1>
        <h2 className="text-lg md:text-xl mb-4" style={{ color: 'var(--secondary-text-color)' }}>
          Backend Developer
        </h2>
        <div className="flex gap-4 mb-4">
          <a href="https://github.com/Arcaz22" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.linkedin.com/in/chandra-arcychan-azfar/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <p className="max-w-xs md:max-w-md text-sm md:text-lg mb-4" style={{ color: 'var(--secondary-text-color)' }}>
          With a passion for developing robust backend systems
        </p>
        <a href={CV} download>
          <button
            className="rounded-full py-2 px-4 md:px-6 text-sm md:text-lg font-bold shadow-md transition transform hover:scale-105 active:translate-y-1"
            style={{
              backgroundColor: 'var(--btn-color)',
              color: 'var(--btn-text-color)',
            }}
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
