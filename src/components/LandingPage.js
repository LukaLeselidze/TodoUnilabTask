import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';

import stick from '../images/greenstick.svg'

function LandingPage() {
    return (
        <div className='landing-page'>
            <div className='container'>
                <div className='box'>
                    <img alt='stick' src={stick}></img>
                    <h1>Keep Track Of Daily Tasks In Life </h1>
                    <div className='link-container'>
                        <Link className='get-started' to='/sign-in'> Get Started </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage