/* eslint-disable no-unused-vars */
import React from 'react';
import HomePageContent from '../components/HomePageContent';
import Particle from '../components/ParticleComponent'
import Navbar from '../components/Navbar';
import '../css/default.css';
import '../css/homepage.css';

const HomePage = () => {
    return (
        <>
            <div className="HomePageContainer">
                <div className="absolute z-10">
                    <Navbar />
                </div>
                <HomePageContent />
            </div>
            <Particle />
        </>
    )
}

export default HomePage
