// this file is the center of the application. It's like a wrapper component that houses all of the other components. need to modify this file to affect any change on the application 

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About'; // this helps render the About component here in the App component
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

// JSX is what's returned here (similar to HTML). the way React uses JSX behind the scenes is very similar to document.createElement()
function App() {
  const [ProjectList] = useState([
    //below, objects that contain each Project's name and description are created so they can be used elsewhere
    { name: 'Portfolio', description: 'Portfolio' }, // use Commercial, Portraits, Food or Landscape as reference here. When Portfolio is clicked, we want projects to appear. when projects are clicked modals pop up.
    { name: 'Resume', description: 'Resume' }
  ]);

  const [currentProject, setCurrentProject] = useState(ProjectList[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        ProjectList={ProjectList}
        // setCurrentProject={setCurrentProject}
        // currentProject={currentProject}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Header currentProject={currentProject}></Header> */}
            <Portfolio></Portfolio>

            {/* this is the About JSX element that helps the About component render here in App.js  */}
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
