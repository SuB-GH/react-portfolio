//import React, { useEffect } from 'react';
import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// this is an array of my projects
const ProjectList = [
  { name: 'projects', description: 'my projects' }
]

function Nav(props) {
  const {
    ProjectList = [],
    setCurrentProject,
    contactSelected,
    currentProject,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentProject.name);
  // }, [currentProject]);

  return (
    //the header is an example of a JSX element
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="myName"> </span> img
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
            <a href="#resume" onClick={() => setContactSelected(false)}>
              My Resume
            </a>
            <a href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li> */}

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          {/* {ProjectList.map((project) => (
            <li
              className={`mx-1 ${currentProject.name === project.name && !contactSelected && 'navActive'
                }`}
              key={project.name}
            >
              <span
                onClick={() => {
                  setCurrentProject(project);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(project.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
