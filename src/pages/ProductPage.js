/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import LaptopCard from '../components/LaptopCard'
import '../css/default.css'
import '../css/searchpage.css'

import { TiArrowBackOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ProductPage() {

    const [listOfLaptops, setListOfLaptops] = useState([]);
    const [errorStatus, setErrorStatus] = useState();
    const location = useLocation();

    useEffect(() => {
        axios.get('/search/', {
            params: {
                category: location.state.user_category, budget: location.state.user_budget,
            },
        }).then(res => {
            setErrorStatus(res.status);
            setListOfLaptops(res.data);
        }).catch(error => {
            setErrorStatus(error.response.status);
        })
    }, [errorStatus]);

    const history = useHistory();
    const routeChange = () => {
        let path = `/search`;
        history.push(path);
    }
    return (
        <>
            <div className="Defalutgradient overflow-y-scroll overflow-x-hidden">
                <Navbar />
                <div className='flex-row mt-10 justify-center items-center'>
                    <TiArrowBackOutline className='h-12 w-12 mb-5 ml-16 bg-white rounded-3xl pb-1 cursor-pointer' onClick={routeChange} />
                    {
                        errorStatus == 500 ?
                            <>
                                <div className='SearchRectBOX p-5 text-white text-center text-3xl'>
                                    <div className='mb-5'>
                                        Whoops! Looks like there is a technical issue at the server side.
                                    </div>
                                    Sorry for the inconvenience. Please try after some time.
                                </div>
                            </>
                            : errorStatus == 204 ?
                                <>
                                    <div className='SearchRectBOX p-5 text-white text-center text-3xl'>
                                        <div className='mb-5'>
                                            There are no laptops available at this moment according to your budget and category.
                                        </div>
                                        Please try with different set of inputs.
                                    </div>
                                </>
                                :
                                <div className="SearchRectBOX p-5 mb-10 grid grid-cols-4 gap-4">
                                    {
                                        listOfLaptops.map((laptop) => {
                                            return (
                                                <>
                                                    <Link
                                                        to={{
                                                            pathname: "/product/" + laptop.id,
                                                            state: {
                                                                user_category: location.state.user_category,
                                                                user_budget: location.state.user_budget,
                                                                maxScore: listOfLaptops[0].score,
                                                                minScore: listOfLaptops[listOfLaptops.length-1].score
                                                            }
                                                        }}
                                                    >
                                                        <LaptopCard
                                                            Laptop={laptop}
                                                            maxScore = {listOfLaptops[0].score}
                                                            minScore = {listOfLaptops[listOfLaptops.length-1].score}
                                                        />
                                                    </Link>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductPage
