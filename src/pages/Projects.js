import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Projects.css';
import './Pages.css';

function Card(props) {
    return(
        <div onClick={()=>window.open(props.link)} className="CardBackground">
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

    const cardOneBody = " I trained my own CNN using PyTorch and implemented OpenCV to process images and extract text from them.";
    const cardTwoBody = "StudyBuddy is an iOS app that let’s you hatch cute, cartoon monsters  by being producitive. It was developed using React Native and MongoDB Realm.";
    const cardThreeBody = "ReInfo is a web application which extracts data from pictures of receipts. It was developed using Flask and Google Vision.";

    return (
        <section ref={projectsRef} id='projectsContainer' className='Fill'>
            <h1 className="ProjectsHeader">My Projects</h1>
            <div className="CardsList">
                <Card link="https://github.com/Jonath4n17/OCR-Software" src={cardOneImg} body={cardOneBody} header="OCR"/>
                <Card link="https://github.com/jodiezhuu/StudyBuddy" src={cardTwoImg} body={cardTwoBody} header="StudyBuddy"/>
                <Card link="https://github.com/Jonath4n17/REInfo" src={cardThreeImg} body={cardThreeBody} header="ReInfo"/>
            </div>
            <button onClick={() => window.open("https://github.com/Jonath4n17")} className="Github">Github</button>
        </section>
    );
}