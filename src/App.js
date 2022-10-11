// this file is the center of the application. It's like a wrapper component that houses all of the other components. need to modify this file to affect any change on the application 
//import React from 'react';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About'; // this helps render the About component here in the App component
import Header from './components/Header';
import Resume from './components/Resume';
//import Portfolio from './components/Portfolio';
//import Footer from './components/Footer';
import ContactForm from './components/Contact';

// JSX is what's returned here (similar to HTML). the way React uses JSX behind the scenes is very similar to document.createElement()
function App() {
 
  const [contactSelected, setContactSelected] = useState(false);
  const[setCurrentNavOption] = useState(false);

  const navOptions = [
    { name: 'about', description: 'About Me Section' },
    { name: 'portfolio', description: 'My Portfolio' },
    { name: 'resume', description: 'My Resume' }
  ]

  return (
    <div>
      <Nav
        navOptions={navOptions}
        setCurrentNavOption={setCurrentNavOption}
        currentNavOption={currentNavOption}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}     
     ></Nav>

      {/* in main section, this means if contact form has been selected, it renders, otherwise resume, about and any other headings will show. */}
      <main>
      {!contactSelected ? (
  <>
    <Resume></Resume>
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )} 
        {/* {!contactSelected ? (
          <>
            
            <Header></Header>
          </>
        ) : (
          <ContactForm></ContactForm>
        )  
        } */}
      </main>
    </div>
  );
}
export default App;
