import React from 'react';
import "./SkillCard.css";

function SkillCard(props) {
    return (
        <div className="tool-card">
            <img src={props.img} alt={props.alt} className="tool-logo" />
            <div>
                <p>{props.skill}</p>
                <h2>{props.category}</h2>
            </div>
        </div>
    );
}

export default SkillCard;