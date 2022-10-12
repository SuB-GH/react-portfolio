import React from 'react';
//import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';
function Portfolio(props) {
  
  return (
    <section id="myPortfolio" className="my-5">
      <h1 id="portfolio">My Projects</h1>
      <Project></Project>
    </section>
  );
  
}
export default Portfolio;
