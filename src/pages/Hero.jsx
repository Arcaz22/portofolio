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
      className="flex flex-col md:flex-row justify-between items-center text-center md:text-left min-h-screen w-full p-6"
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
    >
      <div className="relative mb-8 md:mb-0 md:mr-8">
        <img
          src={heroImg}
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full mx-auto md:mx-0"
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className="absolute top-0 right-0 w-8 h-8 cursor-pointer"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold mb-4">Chandra Arcychan Azfar</h1>
        <h2 className="text-xl mb-4">Backend Developer</h2>
        <div className="flex gap-6 mb-4">
          <a href="https://github.com/Arcaz22" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/chandra-arcychan-azfar/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" className="w-8 h-8" />
          </a>
        </div>
        <p className="max-w-xs md:max-w-md text-lg mb-4">
          With a passion for developing robust backend systems
        </p>
        <a href={CV} download>
          <button className="rounded-full py-2 px-6 text-lg font-bold shadow-md transition transform hover:scale-105 active:translate-y-1">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;