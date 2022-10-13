// this creates the Resume component
import React from 'react';

function Resume() {
  return (
    <div className="resDiv">
      <section id="myRes">
        <h1 id="resume">My Resume</h1>
        <img
          src={require(`../../assets/resume/resume.jpg`)}
          alt="resume"
          className="thumbnail"
        />
      </section>
      {/* <section>
        HTML
        CSS
        Git
        GitHub
        JavaScript
        APIs
        Node.js
        Object-Oriented Programming
        Express.js
        SQL
        Object Relational Mapping
        Model-View Controller
        NoSQL
        React
      </section> */}
    </div>

  );
}

export default Resume;  // this exports the Resume component
