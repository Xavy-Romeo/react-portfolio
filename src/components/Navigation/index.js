import React, { useState } from 'react';

const Nav = () => {
    
    // nav sections array
    const [navSection] = useState([
        {name: 'Contact Me'}, 
        {name: 'Portfolio'}, 
        {name: 'Resume'}
    ]);

    const [currentSection, setCurrentSection] = useState(navSection[0]);

    console.log('the current section is', currentSection);

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about-me">
                        About Me
                    </a>
                </li>
                
                {navSection.map((section) => (
                    <li
                        key={section.name}
                    >
                        <span onClick={() => {setCurrentSection(section.name)}}>
                            {section.name}
                        </span>
                    </li>
                ))}
        
            </ul> 
        </nav>
    );
};

export default Nav;