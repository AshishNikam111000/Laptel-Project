/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({isClicked, toggle}) => {
    return (
        <div className={ isClicked? "sideBarShow" : "sideBarHide md:hidden" }>
            <div className="flex flex-col h-screen items-center justify-start space-y-10 py-10">
                <button className="sidebarMenuIcon " onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div className="sidebarMenuGrp flex flex-col gap-y-11 text-2xl">
                    <Link className="Link1 px-4 rounded-br-2xl rounded-tl-2xl" to="/">.home( )</Link>
                    <Link className="Link2 px-4 rounded-br-2xl rounded-tl-2xl" to="/search">.search( )</Link>
                    <Link className="Link3 px-4 rounded-br-2xl rounded-tl-2xl" to="/about">.about( )</Link>
                    <Link className="Link4 px-4 rounded-br-2xl rounded-tl-2xl" to="/contact">.contact( )</Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar
