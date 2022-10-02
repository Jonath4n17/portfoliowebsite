import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Projects.css';
import './Pages.css';

function Card(props) {
    return(
        <div className="CardBackground">
            <img className="CardImage" src= {process.env.PUBLIC_URL + props.src} alt="Project visual"></img>
            <h2 className="CardHeader">{props.header}</h2>
            <h5 className="CardBody">{props.body}</h5>
        </div>
    );
}

export default function Projects() {
    const projectsRef = useNav('Projects')

    const cardOneImg = "/images/magnify.png";
    const cardTwoImg = "/images/jodie.png";
    const cardThreeImg = "/images/validate.png";

    const cardOneBody = "Body";
    const cardTwoBody = "Body";
    const cardThreeBody = "Body";

    return (
        <section ref={projectsRef} id='projectsContainer' className='Fill'>
            <h1 className="ProjectsHeader">My Projects</h1>
            <div className="CardsList">
                <Card src={cardOneImg} body={cardOneBody} header="OCR"/>
                <Card src={cardTwoImg} body={cardTwoBody} header="StudyBuddy"/>
                <Card src={cardThreeImg} body={cardThreeBody} header="ReInfo"/>
            </div>
            <button className="Github"></button>
        </section>
    );
}