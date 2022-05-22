/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import '../css/Loading.css';

function Loading () {
    let main = useRef(null)
    useEffect(() => {
        var t1 = gsap.timeline();
        var t2 = gsap.timeline({repeat: -1});
        var t3 = gsap.timeline({repeat: -1});

        t1.from("#webName", {duration: 4, 'stroke-dashoffset': 240})
        t1.add(t2, 3)
            .add(t3, 3)

        t2.from("#rect1, #rect2", {duration: 0.8, height:0})
            .from("#rect3, #rect5", {duration: 0.8, height:0})
            .from("#rect7", {duration: 0.8, height:0})
            .fromTo("#rect7", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#rect3, #rect5", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#rect1, #rect2", {heightPercent:100}, { duration: 0.8, height:0})

        t3.from("#rect14, #rect15", {duration: 0.8, height:0})
            .from("#rect6, #rect4", {duration: 0.8, height:0})
            .from("#rect8", {duration: 0.8, height:0})
            .fromTo("#rect8", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#rect6, #rect4", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#rect14, #rect15", {heightPercent:100}, { duration: 0.8, height:0})
    })
    
    return (
        <div className="wrapper" ref={el => {main = el}}>
            <div id="NonWave">
                <svg id="webIcon" width="124" height="146" viewBox="0 0 124 146" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    
                <svg id="webName" width="251" height="56" viewBox="0 0 251 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="LAPTEL" d="M121.698 33.0369L121.699 33.0359C125.393 29.9204 127.181 25.664 127.181 20.5625C127.181 17.2125 126.38 14.1408 124.725 11.4215C123.06 8.66674 120.681 6.56764 117.674 5.12326C114.693 3.68151 111.309 3 107.588 3H91.8375C89.3522 3 87.3375 5.01472 87.3375 7.5V49C87.3375 51.4853 89.3522 53.5 91.8375 53.5H97.2125C99.6978 53.5 101.713 51.4853 101.713 49V37.4688H107.431C113.206 37.4688 118.067 36.0958 121.698 33.0369ZM111.583 23.7565L111.575 23.7631L111.568 23.7697C110.898 24.3746 109.709 24.875 107.588 24.875H101.713V15.5938H107.782C109.569 15.6299 110.683 16.1573 111.435 16.9449C112.228 17.7755 112.712 18.9199 112.712 20.625C112.712 22.2581 112.24 23.1723 111.583 23.7565ZM32.3438 40.9688H16.9375V7.5C16.9375 5.01472 14.9228 3 12.4375 3H7.0625C4.57722 3 2.5625 5.01472 2.5625 7.5V49C2.5625 51.4853 4.57722 53.5 7.0625 53.5H32.3438C34.829 53.5 36.8438 51.4853 36.8438 49V45.4688C36.8438 42.9835 34.829 40.9688 32.3438 40.9688ZM52.5276 50.423L54.6269 44.125H67.4663L69.5909 50.4358C70.2074 52.2668 71.9237 53.5 73.8557 53.5H79.5033C82.6441 53.5 84.8188 50.3639 83.7178 47.4225L68.1838 5.92248C67.5259 4.16479 65.8461 3 63.9694 3H58.0583C56.1785 3 54.4968 4.16844 53.841 5.93011L38.3926 47.4301C37.2981 50.3703 39.4725 53.5 42.6098 53.5H48.2585C50.1954 53.5 51.915 52.2606 52.5276 50.423ZM63.2546 31.5312H58.8208L61.0255 24.8927L63.2546 31.5312ZM157.163 15.5938H166.6C169.085 15.5938 171.1 13.579 171.1 11.0938V7.5C171.1 5.01472 169.085 3 166.6 3H133.538C131.052 3 129.038 5.01472 129.038 7.5V11.0938C129.038 13.579 131.052 15.5938 133.538 15.5938H142.788V49C142.788 51.4853 144.802 53.5 147.288 53.5H152.663C155.148 53.5 157.163 51.4853 157.163 49V15.5938ZM189.05 33.7812H202.55C205.035 33.7812 207.05 31.7665 207.05 29.2812V25.9375C207.05 23.4522 205.035 21.4375 202.55 21.4375H189.05V15.5938H205.613C208.098 15.5938 210.113 13.579 210.113 11.0938V7.5C210.113 5.01472 208.098 3 205.613 3H179.175C176.69 3 174.675 5.01472 174.675 7.5V49C174.675 51.4853 176.69 53.5 179.175 53.5H205.675C208.16 53.5 210.175 51.4853 210.175 49V45.4688C210.175 42.9835 208.16 40.9688 205.675 40.9688H189.05V33.7812ZM243.656 40.9688H228.25V7.5C228.25 5.01472 226.235 3 223.75 3H218.375C215.89 3 213.875 5.01472 213.875 7.5V49C213.875 51.4853 215.89 53.5 218.375 53.5H243.656C246.142 53.5 248.156 51.4853 248.156 49V45.4688C248.156 42.9835 246.142 40.9688 243.656 40.9688Z" stroke="white" stroke-width="3"/>
                </svg> 
            </div>

            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
            </svg>
        </div>
    )
}

export default Loading
