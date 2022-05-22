/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const toggle = () => {
        setClick(!click);
    };

    return (
        <>
            <nav className="flex h-14 w-screen items-center justify-between px-8 py-14">
                <div className="flex flex-row justify-center items-center h-2/5 w-2/5 md:h-min md:w-1/6 space-x-1" >
                    <svg width="124" height="146" viewBox="0 0 124 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="LOGO GROUP">
                        <rect id="rect1" x="21" y="72.3701" width="9" height="31" transform="rotate(-180 21 73.3701)" fill="white"/>
                        <rect id="rect2" x="117" y="72.3701" width="10" height="30" transform="rotate(-180 117 73.3701)" fill="white"/>
                        <rect id="rect3" width="8.72645" height="75.3122" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 117.347 43.7862)" fill="white"/>
                        <rect id="rect4" width="8.72645" height="69.8517" transform="matrix(0.524445 -0.851444 0.879474 0.475947 12.2601 103.335)" fill="white"/>
                        <rect id="rect5" width="8.72645" height="94.6377" transform="matrix(0.524445 -0.851444 0.879474 0.475947 15.0474 41.4677)" fill="white"/>
                        <rect id="rect6" width="8.72645" height="94.6377" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 110.341 103.335)" fill="white"/>
                        <rect id="rect7" width="8.72645" height="77.0637" transform="matrix(0.524445 -0.851444 0.879474 0.475947 22.7688 85.8209)" fill="white"/>
                        <rect id="rect8" width="8.72645" height="72.1049" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 103.335 57.7977)" fill="white"/>
                        <rect id="rect9" x="21" y="57.3701" width="7" height="37" fill="#060A16"/>
                        <rect id="rect10" x="98" y="52.3701" width="7" height="37" fill="#060A16"/>
                        <rect id="rect12" width="10.3202" height="74.1324" transform="matrix(0.699049 0.715074 -0.758593 0.651564 56.2363 0)" fill="#060A16"/>
                        <rect id="rect14" x="12" y="73.3701" width="9" height="30" fill="white"/>
                        <rect id="rect15" x="107" y="73.3701" width="10" height="33" fill="white"/>
                        <rect id="rect13" width="8.84592" height="67.4605" transform="matrix(0.699049 0.715074 -0.758593 0.651564 117.347 95.0897)" fill="#060A16"/>
                        </g>
                    </svg>           
                        
                    <svg width="268" height="88" viewBox="0 0 268 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="LAPTEL" d="M14.6851 62.6025H38.8916V70H5.41992V16.6797H14.6851V62.6025ZM76.5747 57.5854H55.9204L51.5991 70H41.9678L62.1094 16.6797H70.4224L90.6006 70H80.9326L76.5747 57.5854ZM58.5205 50.1147H73.9746L66.2476 27.9956L58.5205 50.1147ZM105.945 50.188V70H96.6797V16.6797H117.078C123.035 16.6797 127.759 18.23 131.25 21.3306C134.766 24.4312 136.523 28.5327 136.523 33.6353C136.523 38.8599 134.802 42.9248 131.36 45.8301C127.942 48.7354 123.145 50.188 116.968 50.188H105.945ZM105.945 42.7539H117.078C120.374 42.7539 122.888 41.9849 124.622 40.4468C126.355 38.8843 127.222 36.6382 127.222 33.7085C127.222 30.8276 126.343 28.5327 124.585 26.8237C122.827 25.0903 120.41 24.1992 117.334 24.1504H105.945V42.7539ZM183.179 24.1504H166.553V70H157.361V24.1504H140.881V16.6797H183.179V24.1504ZM221.375 46.1963H199.475V62.6025H225.073V70H190.21V16.6797H224.817V24.1504H199.475V38.8721H221.375V46.1963ZM241.882 62.6025H266.089V70H232.617V16.6797H241.882V62.6025Z" fill="white"/>
                    </svg>
                </div>

                <button onClick={toggle} className="narbarMenuIcon flex h-1/6 w-1/6 justify-center items-center md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                
                <div className="narbarMenuGrp flex flex-row gap-x-11 text-xl md:block">
                    <Link className="Link1 px-4 py-1 rounded-br-2xl rounded-tl-2xl" to="/home">.home( )</Link>
                    <Link className="Link2 px-4 py-1 rounded-br-2xl rounded-tl-2xl" to="/search">.search( )</Link>
                    <Link className="Link3 px-4 py-1 rounded-br-2xl rounded-tl-2xl" to="/about">.about( )</Link>
                    <Link className="Link4 px-4 py-1 rounded-br-2xl rounded-tl-2xl" to="/contact">.contact( )</Link>
                </div>
            </nav>
            <SideBar isClicked={click} toggle={toggle} />
        </>
    )
}


export default Navbar
