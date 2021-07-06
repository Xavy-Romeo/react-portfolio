import React from 'react';
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.svg';

const Footer = () => {
    return (
      <footer>
            <div className="footer-banner">
                <h2>
                    Thank you for visiting My Portfolio! 
                </h2>
            </div>
            
            <div className="footer-half">
                <div className="footer-icons">
                    <a href="https://github.com/Xavy-Romeo" target="_blank">
                        <img src={GitHub} alt="github icon"></img>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/xavy-romeo-722076215/" target="_blank">
                        <img src={LinkedIn} alt="github icon"></img>
                    </a>
                    
                </div>

                <div className="footer-copy">
                    <p>
                        &copy; {new Date().getFullYear()} 
                    </p>
                    <p>
                        Xavy Romeo
                    </p>
                </div>
            </div>
            
      </footer>  
    );
};

export default Footer;