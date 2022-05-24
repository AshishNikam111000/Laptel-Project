/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import LaptopModel from './LaptopModel'

const HomePageContent = () => {
    return (
        <>
            <div className="absolute top-0 w-screen flex h-screen items-center">
                <div className="HomeContent ml-80 grid text-white text-3xl justify-self-center items-center space-y-4">
                    Get recommendations <br /> on the laptops of your <br /> choice.
                    <Link className="items-center w-8/12"
                        to={{
                            pathname: "/search",
                            state: {
                                InfoStatus: true
                            }
                        }}>
                        <button id="Homebtn" className="rounded-full text-2xl">Get Started</button>
                    </Link>
                </div>
                <LaptopModel />
            </div>
        </>
    )
}

export default HomePageContent
