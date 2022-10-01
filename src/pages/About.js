import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css';
import './Pages.css';

export default function About() {
    const aboutRef = useNav('About')

    const spotifyIcon = "/images/spotify.png"
    const studyingImage = "/images/study.jpg"

    return (
        <section ref={aboutRef} id='aboutContainer' className='Fill'>
            <div className='AboutContent'>
                <div className='AboutMe'>
                    <h1>About Me</h1>
                    <h5>Paragraph 1</h5>
                    <h5>Paragraph 2</h5>
                    <h5>Paragraph 3</h5>
                    <img className="Spotify" src={process.env.PUBLIC_URL + spotifyIcon} alt="Spotify logo"></img>
                </div>
                <img className="StudyImg" src={process.env.PUBLIC_URL + studyingImage} alt="Asthetic picture of Jonathan coding"></img>
            </div>
        </section>
    );
}