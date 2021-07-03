// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {  
  
  // nav sections array
  const [navSection] = useState([
    {name: 'Contact Me'}, 
    {name: 'Portfolio'}, 
    {name: 'Resume'}
]);

// useState hook to set current section
const [currentSection, setCurrentSection] = useState(navSection[0]);
  
// useState hook to set if 'About Me' Selected
const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Header
        navSection={navSection}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        setAboutSelected={setAboutSelected}
        aboutSelected={aboutSelected}
      ></Header>

      <main>
        {!aboutSelected
          ? <>
            {currentSection === 'Contact Me' &&  
              <Contact></Contact>
            } 
            {currentSection === 'Portfolio' &&
              <Project></Project>
            } 
            {currentSection === 'Resume' &&
              <Resume></Resume>
            }
          </>
          : true
        }
        <About></About>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;