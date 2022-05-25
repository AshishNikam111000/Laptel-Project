import React, { useEffect } from 'react';
import gsap from "gsap";

const Loader = () => {
    
    useEffect(() => {
        var t1 = gsap.timeline();
        var t2 = gsap.timeline({repeat: -1});
        var t3 = gsap.timeline({repeat: -1});

        t1.add(t2, 1)
            .add(t3, 1)

        t2.from("#Loadrect1, #Loadrect2", {duration: 0.8, height:0})
            .from("#Loadrect3, #Loadrect5", {duration: 0.8, height:0})
            .from("#Loadrect7", {duration: 0.8, height:0})
            .fromTo("#Loadrect7", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#Loadrect3, #Loadrect5", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#Loadrect1, #Loadrect2", {heightPercent:100}, { duration: 0.8, height:0})

        t3.from("#Loadrect14, #Loadrect15", {duration: 0.8, height:0})
            .from("#Loadrect6, #Loadrect4", {duration: 0.8, height:0})
            .from("#Loadrect8", {duration: 0.8, height:0})
            .fromTo("#Loadrect8", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#Loadrect6, #Loadrect4", {heightPercent:100}, { duration: 0.8, height:0})
            .fromTo("#Loadrect14, #Loadrect15", {heightPercent:100}, { duration: 0.8, height:0})
    }, [])
    return (
        <div>
            <svg id="webIcon" width="124" height="146" viewBox="0 0 124 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="LOGO GROUP">
                    <rect id="Loadrect1" x="21" y="72.3701" width="9" height="31" transform="rotate(-180 21 73.3701)" fill="white" />
                    <rect id="Loadrect2" x="117" y="72.3701" width="10" height="30" transform="rotate(-180 117 73.3701)" fill="white" />
                    <rect id="Loadrect3" width="8.72645" height="75.3122" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 117.347 43.7862)" fill="white" />
                    <rect id="Loadrect4" width="8.72645" height="69.8517" transform="matrix(0.524445 -0.851444 0.879474 0.475947 12.2601 103.335)" fill="white" />
                    <rect id="Loadrect5" width="8.72645" height="94.6377" transform="matrix(0.524445 -0.851444 0.879474 0.475947 15.0474 41.4677)" fill="white" />
                    <rect id="Loadrect6" width="8.72645" height="94.6377" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 110.341 103.335)" fill="white" />
                    <rect id="Loadrect7" width="8.72645" height="77.0637" transform="matrix(0.524445 -0.851444 0.879474 0.475947 22.7688 85.8209)" fill="white" />
                    <rect id="Loadrect8" width="8.72645" height="72.1049" transform="matrix(-0.524445 0.851444 -0.879474 -0.475947 103.335 57.7977)" fill="white" />
                    <rect id="Loadrect9" x="21" y="57.3701" width="7" height="37" fill="#060A16" />
                    <rect id="Loadrect10" x="98" y="52.3701" width="7" height="37" fill="#060A16" />
                    <rect id="Loadrect12" width="10.3202" height="74.1324" transform="matrix(0.699049 0.715074 -0.758593 0.651564 56.2363 0)" fill="#060A16" />
                    <rect id="Loadrect14" x="12" y="73.3701" width="9" height="30" fill="white" />
                    <rect id="Loadrect15" x="107" y="73.3701" width="10" height="33" fill="white" />
                    <rect id="Loadrect13" width="8.84592" height="67.4605" transform="matrix(0.699049 0.715074 -0.758593 0.651564 117.347 95.0897)" fill="#060A16" />
                </g>
            </svg>
        </div>
    )
}

export default Loader