// this creates the Resume component
import React from 'react';

function Resume() {
  return (
    <section id="myRes" className="my-5">
      <h1 id="resume">My Resume</h1>
      <img
            src={require(`../../assets/resume/sample-resume.jpg`)}
            alt="resume"
            className="img-thumbnail mx-1"
            //onClick={() => toggleModal(project, i)}
            //key={project.name}
          />
    </section>
  );
}

export default Resume;  // this exports the Resume component
