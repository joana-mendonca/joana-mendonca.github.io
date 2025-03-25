import React, {useState} from 'react';
import { useTheme } from "../context/ThemeContext";

import joana from "../assets/logos/logo-joana.png";
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';
import { sidebar } from '../data';

import './Sidebar.css';

function Sidebar() {
    const { theme, toggleTheme } = useTheme();
    const [activeId, setActiveId] = useState();

    const handleClick = (section, anchorId) => () => {
        const id = `${section}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setActiveId(anchorId);
    };

    return (
        <nav>
            <div className="sidebar-top">
                <a href="#hero" className="hero-section" onClick={handleClick("hero")}>
                    <img src={joana} alt="Joana" />
                    <div className="title">
                        <h3>Joana Mendonça</h3>
                        <h4>Software Engineer</h4>
                    </div>
                </a>
                <div className="sections">
                    {sidebar.slice(0, 4).map((item) => (
                        <a key={item.id} className='nav-option' href={item.ref} onClick={handleClick(item.section, item.id)} style={{
                            backgroundColor: activeId === item.id && 'var(--on-hover)',
                            border: activeId === item.id ? '1px solid var(--borders)' : 'none',
                            borderRadius: activeId === item.id && '10px',
                        }}>
                            <img className="icon" src={item.icon} alt={item.alt} />
                            <h5>{item.heading}</h5>
                        </a>
                    ))}
                </div>
                <div className="resources">
                    <h4>Resources</h4>
                    {sidebar.slice(4).map((item) => {
                        return (
                            <a key={item.id} className="nav-option" href={item.url} target="_blank" rel="noopener noreferrer" >
                                <img className="icon" src={item.icon} alt={item.alt} />
                                <h5>{item.heading}</h5>
                                <span className="icon arrow"></span>
                            </a>)
                    })}
                </div>
            </div>
            <div className="sidebar-bottom">
                <button className="lightmode" onClick={() => toggleTheme("light")}
                    disabled={theme === "light"}>
                    <img className="icon" src={sun} alt="Sun icon" width={20}></img>
                </button>
                <button className="darkmode" onClick={() => toggleTheme("dark")}
                    disabled={theme === "dark"}>
                    <img className="icon" src={moon} alt="Moon icon" width={20}></img>
                </button>
            </div>
        </nav>
    );
}

export default Sidebar;