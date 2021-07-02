import React from 'react';
import runBuddy from '../../assets/run-buddy.jpg';
import cinfo from '../../assets/cinfo.png';
import manageIt from '../../assets/manage-it.png'

// map images

const Project = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="main-project">
                <h3>Run Buddy</h3>
                <img src={runBuddy} alt="run buddy app picture" height="250px"></img>
                <a>deployed link</a>
                <a>github repo link</a>
            </div>
            <div className="projects-container">
                <div>
                    <h3>Cinfo</h3>
                    <img src={cinfo} alt="cinfo app logo" height="250px"></img>
                    <a>deployed link</a>
                    <a>github repo link</a>
                </div>
                <div>
                    <h3>Manage It</h3>
                    <img src={manageIt} alt="manage it app picture" height="250px"></img>
                    <a>deployed link</a>
                    <a>github repo link</a>
                </div>
            </div>
        </section>
    );
};

export default Project;