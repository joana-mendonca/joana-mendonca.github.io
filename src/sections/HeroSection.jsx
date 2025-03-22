import React from 'react';
import "./HeroSection.css";

function HeroSection() {
    return (
        <section id="hero-section" className="section-body">
            <h1>Creating tech magic<br /><span>one pixel at a time</span></h1>
            <p>I specialize in creating user-centered designs and bringing them to life.</p>
            {/*<a href="#contact-section"><button>Contact me</button></a>*/}
            {/*<a href="#about-section">More about me</a><span> →</span>*/}
        </section>
    );
}

export default HeroSection;