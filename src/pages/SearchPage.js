/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../css/default.css'
import '../css/searchpage.css'

import Navbar from '../components/Navbar'
import GamingWhite from '../images/SVG/sports_esports_white_24dp.svg'
import GamingBlack from '../images/SVG/sports_esports_black_24dp.svg'

import ProfessionalWhite from '../images/SVG/laptop_mac_white_24dp.svg'
import ProfessionalBlack from '../images/SVG/laptop_mac_black_24dp.svg'

import VFXWhite from '../images/SVG/crop_original_white_24dp.svg'
import VFXBlack from '../images/SVG/crop_original_black_24dp.svg'
import { Link, useLocation } from 'react-router-dom'

function SearchPage() {
    const game = ['Gaming laptop means high speed, huge memory, better graphics, and fast processing power.',
        <br />, 'Usage -', <br />, '1. Gaming', <br />, '2. High Performance', <br />, '3. Browsing / Email', <br />, '4. Media / Heavy work', <br />, 'etc..'];
    const pro = ['Professional laptops are designed for portability and long periods of use.',
        <br />, 'Usage-', <br />, '1. Browsing / Email', <br />, '2. Media / Light work', <br />, '3. Business', <br />, 'etc..'];
    const vfx = ['VFX / Designing laptops can be used like digital canvases, where you can draw using a stylus and helps to work realistic 3D animations.',
        <br />, 'Usage-', <br />, '1. Content Creation', <br />, '2. Browsing / Email / Media', <br />, '3. Animation / Heavy work / Designing', <br />, 'etc..'];
    const [GameHover, setGameHover] = useState(false);
    const [ProHover, setProHover] = useState(false);
    const [VFXHover, setVFXHover] = useState(false);

    const [GameClick, setGameClick] = useState(false);
    const [ProClick, setProClick] = useState(false);
    const [VFXClick, setVFXClick] = useState(false);


    const GameToggleHover = () => {
        if (GameClick === false) {
            setGameHover(true)
        }
    }
    const GameToggleHoverOUT = () => {
        if (GameClick === false) {
            setGameHover(false)
        }
    }
    const GameToggleClick = () => {
        setGameClick(!GameClick)
        setProClick(false)
        setProHover(false)
        setVFXClick(false)
        setVFXHover(false)
    }

    //

    const ProToggleHover = () => {
        if (ProClick === false) {
            setProHover(true)
        }
    }
    const ProToggleHoverOUT = () => {
        if (ProClick === false) {
            setProHover(false)
        }
    }
    const ProToggleClick = () => {
        setProClick(!ProClick)
        setGameClick(false)
        setGameHover(false)
        setVFXClick(false)
        setVFXHover(false)
    }

    //

    const VFXToggleHover = () => {
        if (VFXClick === false) {
            setVFXHover(true)
        }
    }
    const VFXToggleHoverOUT = () => {
        if (VFXClick === false) {
            setVFXHover(false)
        }
    }
    const VFXToggleClick = () => {
        setVFXClick(!VFXClick)
        setGameClick(false)
        setGameHover(false)
        setProClick(false)
        setProHover(false)
    }

    const [Gbudget, setGBudget] = useState();
    const [Pbudget, setPBudget] = useState();
    const [Vbudget, setVBudget] = useState();
    
    function changeGBudget() {
        setGBudget(document.getElementById("GBudget").value);
    }
    function changePBudget() {
        setPBudget(document.getElementById("PBudget").value);
    }
    function changeVBudget() {
        setVBudget(document.getElementById("VBudget").value);
    }

    const [Info, setInfo] = useState(true);
    const location = useLocation();
    function toggleInfo() {
        setInfo(false);
    }

    return (
        <>
            <div className="Defalutgradient overflow-y-hidden overflow-x-hidden">
                <Navbar />
                {
                    Info && location.state.InfoStatus ?
                        <div className='InfoRectBOX text-white p-10 pl-20 pr-20 flex flex-col justify-center'>
                            <p className='text-4xl mb-4'>
                                Instructions
                            </p>
                            <ul className='text-2xl list-disc leading-loose pb-5'>
                                <li>Choose the laptop <span className="text-pink-400 font-bold"> category </span> of your choice and enter your <span className="text-pink-400 font-bold"> budget </span>.</li>
                                <li>The list will contain laptops ranging from <span className="text-pink-400 font-bold"> +/- 5 thousand </span> of your budget.</li>
                                <li> <span className="text-pink-400 font-bold"> Alternate suggestion </span> will be provided, so you can go for them also.</li>
                            </ul>
                            <div className='flex flex-row w-full justify-end'>
                                <button className='bg-purple-800 text-xl rounded-full p-1 pl-4 pr-4' onClick={toggleInfo}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                        :
                        <div className="flex h-screen justify-evenly">
                            <div className="Container rounded-2xl">
                                <button className={GameHover ? "CardContainerHhover rounded-2xl" : "CardContainer rounded-2xl"}
                                    onClick={GameToggleClick}
                                    onMouseOver={GameToggleHover}
                                    onMouseOut={GameToggleHoverOUT}
                                >
                                    <div className={GameClick ? "hidden" : "Gaming"} >
                                        <img className={GameHover ? "hidden" : "GamingLogo"} src={GamingWhite} alt="WhiteLogo" />
                                        <img className={!GameHover ? "hidden" : "GamingLogo"} src={GamingBlack} alt="BlackLogo" />
                                    </div>

                                    <div className={GameClick ? "hidden" : GameHover ? "TEXThover text-3xl" : "TEXT text-3xl"}  >
                                        {"Gaming"}
                                    </div>
                                    <div className={GameClick ? "flex flex-row justify-evenly " : "hidden"} >
                                        <div>
                                            <img className="BlackGamingLogo" src={GamingBlack} alt="ClickedLogo" />
                                        </div>
                                        <div className="ClickedTEXT text-3xl" >
                                            {"Gaming"}
                                        </div>
                                    </div>
                                    <p className={GameClick ? "Description" : "hidden"} >
                                        {game}
                                    </p>
                                </button>
                                <div className={GameClick ? "INPUT flex flex-col cursor-pointer" : "hidden"} >
                                    <input className="InsideINPUT rounded-2xl text-2xl" type="number" name="Budget" id="GBudget" min={0} onChangeCapture={changeGBudget} />
                                    <Link className="InsideINPUT rounded-xl mt-2"
                                        to={{
                                            pathname: "/product",
                                            state: {
                                                user_category: "Gaming",
                                                user_budget: Gbudget
                                            }
                                        }}
                                    >
                                        <p className="px-4 py-1">ENTER</p>
                                    </Link>
                                </div>
                            </div>


                            <div className="Container rounded-2xl">
                                <button className={ProHover ? "CardContainerHhover rounded-2xl" : "CardContainer rounded-2xl"}
                                    onClick={ProToggleClick}
                                    onMouseOver={ProToggleHover}
                                    onMouseOut={ProToggleHoverOUT}
                                >
                                    <div className={ProClick ? "hidden" : "Gaming"} >
                                        <img className={ProHover ? "hidden" : "GamingLogo"} src={ProfessionalWhite} alt="WhiteLogo" />
                                        <img className={!ProHover ? "hidden" : "GamingLogo"} src={ProfessionalBlack} alt="BlackLogo" />
                                    </div>

                                    <div className={ProClick ? "hidden" : ProHover ? "TEXThover text-3xl" : "TEXT text-3xl"}  >
                                        {"Professional"}
                                    </div>
                                    <div className={ProClick ? "flex flex-row justify-evenly " : "hidden"} >
                                        <div>
                                            <img className="BlackGamingLogo" src={ProfessionalBlack} alt="ClickedLogo" />
                                        </div>
                                        <div className="ClickedTEXT text-3xl" >
                                            {"Professional"}
                                        </div>
                                    </div>
                                    <p className={ProClick ? "Description" : "hidden"} >
                                        {pro}
                                    </p>
                                </button>
                                <div className={ProClick ? "INPUT flex flex-col cursor-pointer" : "hidden"} >
                                    <input className="InsideINPUT rounded-2xl text-2xl" type="number" name="Budget" id="PBudget" min={0} onChangeCapture={changePBudget} />
                                    <Link className="InsideINPUT rounded-xl mt-2"
                                        to={{
                                            pathname: "/product",
                                            state: {
                                                user_category: "Professional",
                                                user_budget: Pbudget
                                            }
                                        }}
                                    >
                                        <p className="px-4 py-1">ENTER</p>
                                    </Link>
                                </div>
                            </div>


                            <div className="Container rounded-2xl">
                                <button className={VFXHover ? "CardContainerHhover rounded-2xl" : "CardContainer rounded-2xl"}
                                    onClick={VFXToggleClick}
                                    onMouseOver={VFXToggleHover}
                                    onMouseOut={VFXToggleHoverOUT}
                                >
                                    <div className={VFXClick ? "hidden" : "Gaming"} >
                                        <img className={VFXHover ? "hidden" : "GamingLogo"} src={VFXWhite} alt="WhiteLogo" />
                                        <img className={!VFXHover ? "hidden" : "GamingLogo"} src={VFXBlack} alt="BlackLogo" />
                                    </div>

                                    <div className={VFXClick ? "hidden" : VFXHover ? "TEXThover text-3xl" : "TEXT text-3xl"}  >
                                        {"VFX"}
                                    </div>
                                    <div className={VFXClick ? "flex flex-row justify-evenly " : "hidden"} >
                                        <div>
                                            <img className="BlackGamingLogo" src={VFXBlack} alt="ClickedLogo" />
                                        </div>
                                        <div className="ClickedTEXT text-3xl" >
                                            {"VFX"}
                                        </div>
                                    </div>
                                    <p className={VFXClick ? "Description" : "hidden"} >
                                        {vfx}
                                    </p>
                                </button>
                                <div className={VFXClick ? "INPUT flex flex-col cursor-pointer" : "hidden"} >
                                    <input className="InsideINPUT rounded-2xl text-2xl" type="number" name="Budget" id="VBudget" min={0} onChangeCapture={changeVBudget} />
                                    <Link className="InsideINPUT rounded-xl mt-2"
                                        to={{
                                            pathname: "/product",
                                            state: {
                                                user_category: "VFX",
                                                user_budget: Vbudget
                                            }
                                        }}
                                    >
                                        <p className="px-4 py-1">ENTER</p>
                                    </Link>
                                </div>
                            </div>

                        </div>
                }
            </div>
        </>
    )
}

export default SearchPage
