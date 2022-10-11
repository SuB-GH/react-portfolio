import React from 'react';
//import React, { useEffect } from 'react';
import About from '../About';
import Resume from '../Resume';
//import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';

const navOptions = [
  { name: 'about', description: 'About Me Section' }
]


function Nav(props) {
  const {
    navOptions = [],
    setCurrentNavOption,
    currentNavOption,
    contactSelected,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>

        <a data-testid="link" href="/">
          <span> </span> My Portfolio
        </a>

      </h2>
      <nav>
        <ul className="flex-row">

          {/* <li className={`mx-2 ${currentNavOption && 'navActive'}`}> */}
          {/* //when "about" is selected, it will render b/c setContactSelected is "false" */}
          {/* <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li> */}


          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setCurrentNavOption(true)}>About Me </a>
          </li>

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="resume" href="#resume" onClick={() => setCurrentNavOption(true)}>Resume  </a>
          </li>

          {/* <li className="mx-2">
            <span>Portfolio</span>
            </li> */}
          {navOptions.map((navOption) => (
            <li
              className={`mx-1 ${currentNavOption.name === navOption.name && !contactSelected && 'navActive'
                }`}
              key={navOption.name}
            >
              <span
                onClick={() => {
                  setCurrentNavOption(navOption);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(navOption.name)}
              </span>
            </li>
          ))}
          {/* <About></About> */}
          {/* <Resume></Resume> */}
          {/* <Portfolio></Portfolio> */}

        </ul>
      </nav>
    </header >
  );
}

export default Nav;
