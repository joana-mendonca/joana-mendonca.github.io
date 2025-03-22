import React from 'react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data';
import "./SkillsSection.css";

function SkillsSection() {
    return (
        <section id="stack-section">
            <div class="section-title">
                <h1>My Toolbox</h1>
                <div class="bar"></div>
            </div>
            <div class="section-body">
                <h2>The tools and technologies that power my work, every step of the way.</h2>
                <div className="skills-cards">
                    {skills.map(skill => (
                        <SkillCard key={skill.id} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;