import React from 'react';
import Nav from '../Navigation';

const Header = ({ navSection, setCurrentSection, currentSection, setAboutSelected, aboutSelected }) => {
    return (
        <header>
            <div className="row header-container">
                <div className="col-4 header-name-container">
                    <h1>
                        <a href="/" className="header-name">
                            Xavy Romeo
                        </a>
                    </h1>
                </div>

                <div className="col-7 nav-container">
                    <Nav
                        navSection={navSection}
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                        setAboutSelected={setAboutSelected}
                        aboutSelected={aboutSelected}
                    ></Nav>
                </div>
            </div>
        </header>
    )
};

export default Header;