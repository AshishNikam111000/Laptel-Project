/* eslint-disable no-unused-vars */
import React from 'react'

import GMAIL from '../images/SVG/gmail_icon.svg'
import LINKEDIN from '../images/SVG/linkedin logo_icon.svg'
import GITHUB from '../images/SVG/github_icon.svg'
import INSTAGRAM from '../images/SVG/instagram logo_icon.svg'

const AboutPageProfileCard = (props) => {

    function GmailUrl() {
        window.open("https://" + props.gmail);
    }
    function LinkedinUrl() {
        window.open(props.linkedin);
    }
    function GithubUrl() {
        window.open(props.github);
    }
    function InstagramUrl() {
        window.open(props.instagram);
    }

    return (
        <div className={props.isClicked ? props.classShow : props.classHide}>
            <button className="BookMark" onClick={props.toggle}>
                <svg width="129" height="158" viewBox="0 0 129 158" fill={"rgba(200, 200, 200)"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3004 65.6714L99.8985 6.83328C110.533 -0.229279 124.75 7.39558 124.75 20.1618V137.838C124.75 150.604 110.533 158.229 99.8985 151.167L11.3004 92.3286C1.76913 85.9988 1.76913 72.0012 11.3004 65.6714Z" stroke="url(#paint0_linear)" stroke-width="8" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="-16" y1="79" x2="128.091" y2="78.9881" gradientUnits="userSpaceOnUse">
                            <stop offset="0.614583" stop-color="#00F0FF" />
                            <stop offset="1" stop-color="#C111DD" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>

            <div className="HolderName p-2 flex justify-center items-center rounded">
                <p>{props.name}</p>
            </div>
            <div className="ProfileLinks grid grid-cols-2 justify-center items-center rounded">
                <div onClick={GmailUrl} className="cursor-pointer GMAIL" > <img src={GMAIL} alt="GMAIL" /> </div>
                <div onClick={LinkedinUrl} className="cursor-pointer LINKEDIN" > <img src={LINKEDIN} alt="LINKEDIN" /> </div>
                <div onClick={GithubUrl} className="cursor-pointer GITHUB" > <img src={GITHUB} alt="GITHUB" /> </div>
                <div onClick={InstagramUrl} className={props.InstaCheck ? "cursor-pointer INSTAGRAM" : "hidden"} > <img src={INSTAGRAM} alt="INSTAGRAM" /> </div>
            </div>
        </div>
    )
}

export default AboutPageProfileCard
