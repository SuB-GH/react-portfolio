// Project is a child of Portfolio?
import React, { useState } from 'react';
import Modal from '../Modal';
const Project = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  const [projects] = useState([
    {
      name: 'Run Buddy',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Project 2',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Project 3',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Project 4',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Project 5',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Project 6',
      project: 'run-buddy-image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentProjects = projects.filter((proj) => proj.project === project);
  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
      )}
      
      <div className="flex-row">
        {projects.map((project, i) => (
          <div>
            <h3>{ project.name }</h3>
            <img
            src={require(`../../assets/small/${project.project}.jpg`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(project, i)}
            key={project.name}
          />
          </div>
        ))}
      </div>
      
      <img
      src={require(`../../assets/small/proj1.jpg`)}
      />
    
    </div>
  );
};

export default Project;