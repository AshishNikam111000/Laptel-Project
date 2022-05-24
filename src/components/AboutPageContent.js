/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import AboutPageProfileCard from './AboutPageProfileCard'

const AboutPageContent = () => {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const [thrid, setthrid] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [click, setclick] = useState(false);
    const [wheel, setwheel] = useState(false);

    const togglewheel = () => {
        setwheel(!wheel);
        setfirst(false);
        setsecond(false);
        setthrid(false);
        setfourth(false);
    };
    const toggleclick = () => {
        setclick(!click);
        setfirst(false);
        setsecond(false);
        setthrid(false);
        setfourth(false);
    };
    const toggleone = () => {
        setfirst(!first);
        setsecond(false);
        setthrid(false);
        setfourth(false);
    };
    const toggletwo = () => {
        setfirst(false);
        setsecond(!second);
        setthrid(false);
        setfourth(false);
    };
    const togglethree = () => {
        setfirst(false);
        setsecond(false);
        setthrid(!thrid);
        setfourth(false);
    };
    const togglefour = () => {
        setfirst(false);
        setsecond(false);
        setthrid(false);
        setfourth(!fourth);
    };

    useEffect(() => {
        document.body.className = "preload";
        setTimeout(function () {
            document.body.className = "";
        }, 1000);
    }, [])


    return (
        <>
            <div className={"RectBOX text-white cursor-pointer"} onWheel={togglewheel} onClick={toggleclick}>
                <div className={!wheel ? "TextBoxTopShow TEXTBOXTOP py-24 p-20 w-10/12" : "TextBoxTopHide TEXTBOXTOP py-24 p-20 w-10/12"} >
                    <p className="text-6xl">
                        What we do?
                    </p> <br /> <br />
                    <p className="text-2xl">
                        We're a team of engineers, modders, gamers and tech enthusiasts. We happen to build this website to recommend users according
                        to their needs. This website recommends devices suitable for gamers, content creators, data scientists, Machine learning
                        experts, and just about anyone who wants the latest and greatest in tech.
                    </p>
                </div>

                <div className={wheel ? "TextBoxBottomShow TEXTBOXBOTTOM py-28 p-20 w-10/12" : "TextBoxBottomHide TEXTBOXBOTTOM py-28 p-20 w-10/12"} >
                    <p className="text-6xl">
                        Why laptel ?
                    </p> <br />  <br />
                    <p className="text-2xl">
                        We recommend you the best tech suitable for your job in your budget.
                        Laptel provides you a descriptive search list of devices considered on the basis of their performance score. So
                        that you’ll get the best of what you desire.
                    </p>
                </div>
            </div>

            <AboutPageProfileCard
                classShow="Profile1 ProfileCardShow"
                classHide="Profile1 ProfileCardHide"
                name="PRITHVI KRISHNA SONAR"

                gmail="prithvisonar11@gmail.com"
                linkedin="http://www.linkedin.com/in/prithvi-sonar-373023133"
                github="https://github.com/PSBEAST"
                InstaCheck={false}
                initial = {'P'}
                styles = {'absolute text-7xl bottom-12 right-7 text-cyan-300'}

                isClicked={second}
                toggle={toggletwo}
            />

            <AboutPageProfileCard                
                classShow="Profile2 ProfileCardShow"
                classHide="Profile2 ProfileCardHide"
                name="UMANG RAMASHISH THAKUR"

                gmail="umangramthakur@gmail.com"
                linkedin="https://www.linkedin.com/in/umang-thakur-3665771a2/"
                github="https://github.com/Umang-Thakur"
                InstaCheck={false}
                initial = {'U'}
                styles = {'absolute text-7xl bottom-11 right-6 text-cyan-300'}

                isClicked={thrid}
                toggle={togglethree}
            />

            <AboutPageProfileCard
                classShow="Profile3 ProfileCardShow"
                classHide="Profile3 ProfileCardHide"
                name="TANAY WASEKAR"

                gmail="tanaywasekar30@gmail.com"
                linkedin="https://www.linkedin.com/in/tanay-wasekar-24136b1b2"
                github=""
                instagram="http://instagram.com/tanay_wasekar"
                InstaCheck={true}
                initial = {'T'}
                styles = {'absolute text-7xl bottom-11 right-7 text-cyan-300'}

                isClicked={first}
                toggle={toggleone}
            />

            <AboutPageProfileCard
                classShow="Profile4 ProfileCardShow"
                classHide="Profile4 ProfileCardHide"
                name="NIKAM ASHISH DATTATRAY"

                gmail="nikamashish1125@gmail.com"
                linkedin="https://www.linkedin.com/in/ashish-nikam-821475137"
                github="https://github.com/AshishNikam111000"
                InstaCheck={false}
                initial = {'A'}
                styles = {'absolute text-7xl mb-1 bottom-12 right-6 text-cyan-300'}

                isClicked={fourth}
                toggle={togglefour}
            />
        </>
    )
}

export default AboutPageContent
