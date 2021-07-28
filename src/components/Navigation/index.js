import React, { useState, useEffect } from 'react';

const Nav = ({ navSection, setCurrentSection, currentSection, setAboutSelected, aboutSelected }) => {  

    // useEffect hook to set current tab title
    useEffect(() => {
        {aboutSelected
            ? document.title = 'Xavy-Romeo'
            : document.title = currentSection  
        }
    });  

    const nameLoad = () => {
        const name = document.getElementById('my-name');
        
        name.animate([
             { transform: 'translateY(150%)', opacity: '.1' },
             { transform: 'translateY(0)', opacity: '.6'},
             { transform: 'translateY(-20%)', opacity: '.6' },
             { transform: 'translateY(0)', opacity: '1' }
        ], {duration: 3000});
    };

    return (
        <nav>
            <ul className='row nav-sections'>
                <li>
                    <span 
                        onClick={() => {
                            setAboutSelected(true)
                            nameLoad()
                        }}
                        id='About Me'
                    >
                        About Me
                    </span>
                </li>
                
                {navSection.map((section) => (
                    <li 
                        key={section.name}
                    >
                        <span 
                            onClick={() => {
                                setCurrentSection(section.name)
                                setAboutSelected(false)
                                nameLoad()
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