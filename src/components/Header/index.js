import React from 'react';
import Nav from '../Navigation';

const Header = ({ navSection, setCurrentSection, currentSection, setAboutSelected, aboutSelected }) => {
    return (
        <header>
            <h1>
                <a href="/">
                    Xavy Romeo
                </a>
            </h1>

            <Nav
                navSection={navSection}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
                setAboutSelected={setAboutSelected}
                aboutSelected={aboutSelected}
            ></Nav>
        </header>
    )
};

export default Header;