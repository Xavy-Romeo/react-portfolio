import React, { useState, useEffect } from 'react';

const Nav = ({ navSection, setCurrentSection, currentSection, setAboutSelected, aboutSelected }) => {  

    // useEffect hook to set current tab title
    useEffect(() => {
        {aboutSelected
            ? document.title = 'Xavy-Romeo'
            : document.title = currentSection  
        }
    });

    return (
        <nav>
            <ul className='row nav-sections'>
                <li>
                    <span 
                        // className='nav-li'
                        onClick={() => {setAboutSelected(true)}}
                        id='About Me'
                    >
                        About Me
                    </span>
                </li>
                
                {navSection.map((section) => (
                    <li 
                        // className='nav-li'
                        key={section.name}
                    >
                        <span 
                            onClick={() => {
                                setCurrentSection(section.name)
                                setAboutSelected(false)
                            }}
                            id={section.name}
                        >
                            {section.name}
                        </span>
                    </li>
                ))}
        
            </ul> 
        </nav>
    );
};

export default Nav;