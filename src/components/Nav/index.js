import React from 'react';

function Nav(props) {
  const {
    setCurrentNavOption,
    currentNavOption,

  } = props;

  return (
    <header className="flex-row px-1">
      <h2>

        <a data-testid="link" href="/">
          <span> </span> Susan Brown
        </a>

      </h2>
      <nav>
        <ul className="flex-row">

          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setCurrentNavOption("about")}>About Me </a>
          </li>

          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="contact" href="#contact" onClick={() => setCurrentNavOption("contact")}>Contact</a>
          </li>

          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="resume" href="#resume" onClick={() => setCurrentNavOption("resume")}>Resume  </a>
          </li>

          <li className={`mx-2 ${currentNavOption && 'navActive'}`}>
            <a data-testid="portfolio" href="#portfolio" onClick={() => setCurrentNavOption("portfolio")}>My Portfolio  </a>
          </li>

        </ul>
      </nav>
    </header >

  );

}

export default Nav;
