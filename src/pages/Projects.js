import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Projects.css';
import './Pages.css';

export default function Projects() {
    const projectsRef = useNav('Projects')

    return (
        <section ref={projectsRef} id='projectsContainer' className='Fill'>
            <h1>Projects</h1>
        </section>
    );
}