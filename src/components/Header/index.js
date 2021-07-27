import React, { useState, useEffect } from 'react';
import Nav from '../Navigation';
import { throttle, debounce } from '../../utils';

const Header = ({ navSection, setCurrentSection, currentSection, setAboutSelected, aboutSelected }) => {
    
    const [headerActive, setHeaderActive] = useState(false);

    const changeHeader = () => {
        if (window.scrollY > 50) {
            console.log('hi hi hi');
            setHeaderActive(true);
        }
        else {
            setHeaderActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(debounce(changeHeader)));
        return () => window.removeEventListener('scroll', throttle(debounce(changeHeader)));
    }, []);
    
    
    return (
        <header id='header' className={headerActive ? 'header-active': null}>
            {/* <div className={headerActive ? 'row header-div header-active' : 'row header-div'}> */}
            <div className='row'>
                <div className='col-4 header-name-container'>
                    <h1>
                        <a href='/' className='header-name'>
                            Xavy Romeo
                        </a>
                    </h1>
                </div>

                <div className='col-7 nav-container'>
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