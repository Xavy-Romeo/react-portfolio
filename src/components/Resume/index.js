import React from 'react';
import sampleResume from '../../assets/Sample-Resume.png'

const Resume = () => {
    return (
        <section>
            <h3 className="section-title">Resume</h3>
            <div className="resume-container">
                <img src={sampleResume}></img>
            </div>
        </section>
    );
};

export default Resume;