import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css';
import './Pages.css';

export default function About() {
    const aboutRef = useNav('About')

    const spotifyIcon = "/images/spotify.png"
    const studyingImage = "/images/study.jpg"

    const paraOne = "Hi everyone! My name is Jonathan and I'm a Computer Science student at the University of Waterloo. Over the past summer, "
    + "I worked as a student developer at Borden Ladner Gervais (BLG) on the innovation team.";
    const paraTwo = "I love to learn, especially topics I am passionate about such as statistics, machine learning, robotics, and brain-computer " +
    "interfaces. I also enjoy full-stack development and data science involving languages/frameworks such as .NET Core, Python, and React.";
    const paraThree = "Besides work, I enjoy playing basketball and will always be a supporter of Jeremy Lin. In addition, I'm interested in digital design and love listening to music. Check out my playlists below!";
    return (
        <section ref={aboutRef} id='aboutContainer' className='Fill'>
            <div className='AboutContent'>
                <div className='AboutMe'>
                    <h1>About Me</h1>
                    <h5>{paraOne}</h5>
                    <h5>{paraTwo}</h5>
                    <h5>{paraThree}</h5>
                    <img onClick={() => window.open("https://open.spotify.com/user/ao0ld1szgvqw39khrd2yigafv?si=6f80de20e5164735")} className="Spotify" src={process.env.PUBLIC_URL + spotifyIcon} alt="Spotify logo"></img>
                </div>
                <img className="StudyImg" src={process.env.PUBLIC_URL + studyingImage} alt="Jonathan coding his heart out"></img>
            </div>
        </section>
    );
}