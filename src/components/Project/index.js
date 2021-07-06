import React from 'react';
import runBuddy from '../../assets/run-buddy.jpg';
import cinfo from '../../assets/cinfo.png';
import manageIt from '../../assets/manage-it.png';
import GitHub from '../../assets/GitHub.png';

const Project = () => {
    
    return (
        <section>
            <h3 className="section-title">Projects</h3>
            
            <div>
                <div className="main-project-container">
                    <div className="main-project">
                        <img src={runBuddy} alt="run buddy app picture" height="100%" width="100%"></img>
                        
                        <div className="link-div feature-links">
                            
                            <a href="https://xavy-romeo.github.io/run-buddy/" target="_blank">
                                <h4>Run Buddy</h4>
                            </a>
                            <a href="https://github.com/Xavy-Romeo/run-buddy" target="_blank">
                                <img src={GitHub} alt="github logo"></img>
                            </a>
                            
                        </div>
                    </div>
                </div>
               
                <div className="projects-container">
                    <div className="project-div">
                        <div className="project cinfo">
                            <img src={cinfo} className="cinfo-logo" alt="cinfo app logo" width="100%"></img>
                            
                            <div className="link-div project-links">
                                
                                <a href="https://xavy-romeo.github.io/project-1-ucla/" target="_blank">
                                    <h4>Cinfo</h4>
                                </a>
                                <a href="https://github.com/Xavy-Romeo/project-1-ucla" target="_blank">
                                    <img src={GitHub} alt="github logo"></img>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    <div className="project-div">
                        <div className="project">
                            <img src={manageIt} alt="cinfo app logo" width="100%" height="100%"></img>
                            
                            <div className="link-div project-links">
                                
                                <a href="https://cryptic-bastion-04157.herokuapp.com" target="_blank">
                                    <h4>Manage It</h4>
                                </a>
                                <a href="https://github.com/Xavy-Romeo/manage-it" target="_blank">
                                    <img src={GitHub} alt="github logo"></img>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;