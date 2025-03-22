import React from 'react';
import ProjectCard from "../components/ProjectCard";
import { projects } from '../data';
import "./ProjectsSection.css";

function ProjectsSection() {
    return (
        <section id="projects-section">
            <div className="section-title">
                <h1>Projects</h1>
                <div className="bar"></div>
            </div>

            {projects.map((project, index) => (
                <div>
                    <ProjectCard key={project.id} {...project} />
                    <div
                        className="projects-footer"
                        style={index === projects.length - 1 ? { display: 'none' } : {}}
                    ></div>
                </div>
            ))}
        </section>
    );
}

export default ProjectsSection;