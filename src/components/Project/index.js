// Project is a child of Portfolio?
import React, { useState } from 'react';
//import Modal from '../Modal';
const Project = ({ project }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentProject, setCurrentProject] = useState();
  const [projects] = useState([
    {
      name: 'Run Buddy',
      project: 'run-buddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://sub-gh.github.io/run-buddy/',
      github: 'https://github.com/SuB-GH/run-buddy'
    },
    {
      name: 'Rental Recap',
      project: 'rental-recap',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://morning-meadow-66155.herokuapp.com/',
      github: 'https://github.com/sczygelski/order-up'
    },
    {
      name: 'Staring at the Stars',
      project: 'sats',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://sub-gh.github.io/group-4/',
      github: 'https://github.com/SuB-GH/group-4'
    },
    {
      name: 'JavaScript Coding Quiz',
      project: 'coding-quiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://sub-gh.github.io/coding-quiz/',
      github: 'https://github.com/SuB-GH/coding-quiz'
    },
    {
      name: 'Note Taker',
      project: 'note-taker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://evening-spire-55005.herokuapp.com/',
      github: 'https://github.com/SuB-GH/note-taker'
    },
    {
      name: 'Tech Blog',
      project: 'tech-blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      deployed: 'https://aqueous-badlands-64708.herokuapp.com/',
      github: 'https://github.com/SuB-GH/tech-blog'
    },
  ]);

  return (
    <div>
      <div id="myProjects" className="flex-row">
        {projects.map((project, i) => (
          <div class="projContainer" id="jpegs">
            <h3>{project.name}</h3>            
            <a href='#'>{project.deployed}</a>
            <a href='#'>{project.github}</a>
            <img
              src={require(`../../assets/proj-img/${project.project}.jpg`)}
              alt={project.name}
              className="img-thumbnail mx-1"
              
              key={project.name}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;