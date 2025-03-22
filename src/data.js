import cards from './assets/icons/cards-three.svg';
import user from './assets/icons/user.svg';
import stack from './assets/icons/stack.svg';
import envelope from './assets/icons/envelope-simple.svg';
import linkedin from './assets/icons/linkedin.svg';
import behance from './assets/icons/behance.svg';
import github from './assets/icons/github.svg';
import mudeThumbnail from "./assets/images/MUDE-thumbnail.png";
import moeyThumbnail from "./assets/images/Moey-thumbnail.png";
import editThumbnail from "./assets/images/EDIT-thumbnail.png";
import keeperThumbnail from "./assets/images/the-keeper-app-mockup.png";
import miro from './assets/logos/miro-logo.png';
import figma from './assets/logos/figma-logo.png';
import html from './assets/logos/html-logo.svg';
import css from './assets/logos/css-logo.svg';
import react from './assets/logos/react-logo.svg';
import node from './assets/logos/nodejs-logo.svg';
import javascript from './assets/logos/javascript-logo.png';
import java from './assets/logos/java-logo.svg';

export const sidebar = [
    {
        id: 0,
        heading: "Projects",
        section: "projects",
        ref: "#projects",
        icon: cards,
        alt: "Three cards stacked icon"
    },
    {
        id: 1,
        heading: "About",
        section: "about",
        ref: "#about",
        icon: user,
        alt: "User icon"
    },
    {
        id: 2,
        heading: "Stack",
        section: "stack",
        ref: "#stack",
        icon: stack,
        alt: "Stacked layers icon"
    },
    {
        id: 3,
        heading: "Contact",
        section: "contact",
        ref: "#contact",
        icon: envelope,
        alt: "Envelope icon"
    },
    {
        id: 4,
        heading: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/joana-mendon%C3%A7a-374244115/",
        alt: "Linkedin icon",
    },
    {
        id: 5,
        heading: "Behance",
        icon: behance,
        url: "https://www.behance.net/joana_inDesign",
        alt: "Behance icon",
    },
    {
        id: 6,
        heading: "Github",
        icon: github,
        url: "https://github.com/joana-mendonca",
        alt: "Github icon",
    },
];

export const projects = [
    {
        id: "project0",
        company: "",
        title: "The Keeper App",
        tags: ["Frontend", "React", "Web Development", ],
        src: keeperThumbnail,
        alt: "The Keeper App website thumbnail",
        url: "https://github.com/joana-mendonca/the-keeper-app",
    },
    {
        id: "project1",
        company: "MUDE",
        title: "Redesign website",
        tags: ["UX Research", "UI Design", "Redesigning Website", "Brand Design"],
        src: mudeThumbnail,
        alt: "MUDE website thumbnail",
        url: "https://www.behance.net/gallery/215565079/Redesign-MUDE-website/modules/1227085705",
    },
    {
        id: "project2",
        company: "EDIT.",
        title: "Design mobile application",
        tags: ["UX Research", "UI Design", "Product Design"],
        src: editThumbnail,
        alt: "EDIT mobile app design",
        url: "https://www.behance.net/gallery/222051447/EDIT-Mobile-Application/modules/1267188189",
    },
    {
        id: "project3",
        company: "Moey!",
        title: "Redesign onboarding process",
        tags: ["UX Research", "UI Design"],
        src: moeyThumbnail,
        alt: "Moey mobile app onboarding design",
        url: "https://www.behance.net/gallery/215992229/Apresentacao-projeto-final-360/modules/1229656913",
    },
]

export const skills = [
    {
        id: "0",
        skill: "Miro",
        category: "Planning",
        img: miro,
        alt: "Miro logo",           
    },
    {
        id: "1",
        skill: "Figma",
        category: "Product Design",
        img: figma,
        alt: "Figma logo",           
    },
    {
        id: "2",
        skill: "HTML",
        category: "Web Development",
        img: html,
        alt: "HTML logo",           
    },
    {
        id: "3",
        skill: "CSS",
        category: "Web Development",
        img: css,
        alt: "CSS logo",           
    },
    {
        id: "4",
        skill: "React",
        category: "Web Development",
        img: react,
        alt: "React logo",           
    },
    {
        id: "5",
        skill: "NodeJS",
        category: "Web Development",
        img: node,
        alt: "NodeJS logo",           
    },
    {
        id: "6",
        skill: "Javascript",
        category: "Programming Language",
        img: javascript,
        alt: "Javascript logo",           
    },
    {
        id: "7",
        skill: "Java",
        category: "Programming Language",
        img: java,
        alt: "Java logo",           
    },
]