import React from 'react';
import "./ProjectCard.css";

function ProjectCard(props) {
    const handleClick = (url) => {
        window.open(url, '_blank'); // Opens in a new tab
    };

    return (
        <div>
            <div className="project-card">
                <div className="project-title">
                    <h2>{props.company}</h2>
                    <h1>{props.title}</h1>
                </div>
                <div className="project-body">
                    <img src={props.src} alt={props.alt} width="546" />
                    <div className="project-tags">
                        {props.tags.map((tag, index) => (
                            <p key={props.id + '-' + index} className="project-tag">{tag}</p>
                        ))}
                        <button onClick={() => handleClick(props.url)}>View work</button>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default ProjectCard;