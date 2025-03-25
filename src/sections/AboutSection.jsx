import React from 'react';
import './AboutSection.css';

function AboutSection() {
    return (
        <section id="about-section">
            <div className="section-title">
                <h1>About</h1>
                <div className="bar"></div>
            </div>
            <div className="section-body">
                <h2>Who made this website?</h2>
                <p>Hi, there! I am Joana, a <b>Software Engineer</b> with a passion for developing high-quality solutions that blend technical excellence
                    with user-focused experiences. With a diverse background in UX/UI, frontend and backend engineering, I have worked across some web applications to deliver scalable, reliable features.
                    <br />
                    <br />
                    I am passionate about researching and empathizing with users to deeply understand their needs and uncover the best solutions to address their pain points.
                    I thrive in the space where user experience meets technology, aiming to create intuitive, user-centered designs that are both functional and pleasant.
                    <br />
                    <br />
                    What excites me most is the creative journey — from idea to execution.
                    I love bringing designs to life through modern tools and frameworks, translating thoughtful user experiences into seamless, responsive,
                    and visually engaging interfaces.
                </p>
            </div>
        </section>);
}

export default AboutSection;