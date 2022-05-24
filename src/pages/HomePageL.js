/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import HomePageContent from '../components/HomePageContent';
import Particle from '../components/ParticleComponent'
import Navbar from '../components/Navbar';
import '../css/default.css';
import '../css/homepage.css';
import Loading from './Loading';

const HomePage = () => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 7000)
    }, [])

    if (show) return (<Loading />)
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
