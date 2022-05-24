/* eslint-disable no-unused-vars */
import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import LaptopCard from './LaptopCard'
import '../css/laptop.css'

const SimilarLaptops = (props) => {
    const location = useLocation();

    return (
        <>
            <div div className='SimilarLaptopShadowBox h-screen w-screen bg-gray-900 opacity-70 z-10' onClick={props.Click}></div>
            <div className='SimilarLaptopBox bg-white p-2 justify-center w-1/2 rounded-md flex flex-col z-20 '>
                <div className='flex justify-end'>
                    <MdClose className='w-8 h-8 mr-2 cursor-pointer fill-white' onClick={props.Click} />
                </div>
                <div className='text-white text-xl text-center mb-5'>
                    Laptops in other categories within <span className="text-orange-400 font-bold"> same price </span> <br /> 
                    range with better <span className="text-orange-400 font-bold"> performance </span>.
                </div>
                <div className="SearchRectBOX p-5 mb-10 grid grid-cols-2 gap-4 overflow-y-scroll">
                    {
                        props.SimilarLaptop.map((laptop) => {
                            return (
                                <>
                                    <Link
                                        to={{
                                            pathname: "/product/" + laptop.id,
                                            state: {
                                                LaptopToShow: laptop,
                                                scaled_score: props.Scaled_Score,
                                                user_category: location.state.user_category,
                                                user_budget: location.state.user_budget,
                                                maxScore: props.SimilarLaptop[0].score,
                                                minScore: props.SimilarLaptop[props.SimilarLaptop.length - 1].score
                                            }
                                        }}
                                    >
                                        <LaptopCard
                                            Laptop={laptop}
                                            user_category={location.state.user_category}
                                            user_budget={location.state.user_budget}
                                            maxScore={props.SimilarLaptop[0].score}
                                            minScore={props.SimilarLaptop[props.SimilarLaptop.length - 1].score}
                                        />
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SimilarLaptops