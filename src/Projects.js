import React, { Component } from 'react';
import projectData from './projects.json';

class Projects extends Component {
	render() {
    const projects = JSON.parse(JSON.stringify(projectData));
    document.getElementsByTagName('title')[0].textContent = 'Abhishek Chaudhuri - Projects';

		return (
      <main className="projects">
			  <h3 className="projects-heading" tabIndex={0}>Projects</h3>
        <ul className="projects-list">
          {projects.map(project => (
            <li key={project.id}>
              <h4 className="projects-name" tabIndex={0}>{project.name}</h4>
              <img className="projects-image" tabIndex={0} src={project.image}
                alt={'Image of ' + project.name}/>
              <p className="projects-about" tabIndex={0}>{project.about}</p>
              <p className="projects-technology" tabIndex={0}>
                Made Using: {project.technology.join(', ')}
              </p>
              {project.website ? (
                <a className="projects-website" href={project.website} target="_blank"
                rel="noopener noreferrer">View Project</a>
              ) : (
                <p className="projects-website" tabIndex={0}>&darr; See GitHub link below &darr;</p>
              )}
              <a className="projects-repo" href={project.repo} target="_blank"
                rel="noopener noreferrer">View on GitHub</a>
            </li>
          ))}
        </ul>
      </main>
		);
	}
}

export default Projects;
