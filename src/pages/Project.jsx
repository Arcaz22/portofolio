import React from 'react';
import apidock from '../assets/images/apidock.png';
import web from '../assets/images/web.png';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="flex flex-col text-center text-white py-12">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard
          src={apidock}
          link="https://github.com/Arcaz22/iposyandu"
          h3="iPosyandu"
          p="API iPosyandu"
        />
        <ProjectCard
          src={apidock}
          link="https://github.com/Arcaz22/attendance"
          h3="Attendance"
          p="API Attendance"
        />
        <ProjectCard
          src={web}
          link="https://github.com/Arcaz22/Meta"
          h3="Booking Travel"
          p="Website Booking Travel"
        />
      </div>
    </section>
  );
}

export default Projects;
