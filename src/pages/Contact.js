import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Contact.css';
import './Pages.css';

export default function Contact() {
    const contactRef = useNav('Contact')

    return (
        <section ref={contactRef} id='contactContainer' className='Footer'>
            <h1>Contact</h1>
        </section>
    );
}