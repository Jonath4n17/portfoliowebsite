import React from 'react';
import { useNav } from '../customHooks/useNav';
import './About.css';
import './Pages.css';

export default function About() {
    const aboutRef = useNav('About')

    return (
        <section ref={aboutRef} id='aboutContainer' className='Fill'>
            <h1>About</h1>
        </section>
    );
}