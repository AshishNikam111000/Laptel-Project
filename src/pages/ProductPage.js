/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import LaptopCard from '../components/LaptopCard'
import '../css/default.css'
import '../css/searchpage.css'

import { TiArrowBackOutline } from 'react-icons/ti'
import axios from 'axios';
import Loader from '../components/Loader';

function ProductPage() {

    const [listOfLaptops, setListOfLaptops] = useState([]);
    const [loaderStatus, setLoaderStatus] = useState(true);
    const [errorStatus, setErrorStatus] = useState();
    const location = useLocation();

    const getData = async () => {
        const response = await axios.get('http://3.109.154.245/search/', {
            params: {
                category: location.state.user_category, budget: location.state.user_budget,
            }
        });
        setErrorStatus(response.status);
        setListOfLaptops(response.data);
    };

    useEffect(() => {
        getData();
        setTimeout(() => {
            setLoaderStatus(!loaderStatus);
        }, 5000)
    }, []);

    const history = useHistory();
    const routeChange = () => {
        let path = `/search`;
        history.push({
            pathname: path,
            state: { InfoStatus: false }
        });
    }
    return (
        <>
            <div className="Defalutgradient overflow-y-scroll overflow-x-hidden">
                <Navbar />
                <div className='flex-row mt-10 justify-center items-center'>
                    <TiArrowBackOutline className='h-12 w-12 mb-5 ml-16 bg-white rounded-3xl pb-1 cursor-pointer' onClick={routeChange} />
                    {
                        location.state.user_budget == undefined ?
                            <>
                                <div className='SearchRectBOX p-5 text-white text-center text-3xl'>
                                    <div className='mb-5'>
                                        Whoops! Looks like you haven't entered any budget.
                                    </div>
                                    Please enter a budget for suggestions.
                                </div>
                            </>
                            :
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
                                    loaderStatus ?
                                        <div className='SearchRectBOX p-5 '>
                                            <center>
                                                <Loader />
                                            </center>
                                        </div>
                                        :
                                        <div className="SearchRectBOX p-5 mb-10 grid grid-cols-4 gap-4">
                                            {
                                                listOfLaptops.map((laptop) => {
                                                    return (
                                                        <>
                                                            <LaptopCard
                                                                Laptop={laptop}
                                                                user_category={location.state.user_category}
                                                                user_budget={location.state.user_budget}
                                                                maxScore={listOfLaptops[0].score}
                                                                minScore={listOfLaptops[listOfLaptops.length - 1].score}
                                                                BtnShow={laptop.similar.length == 0 || location.state.user_category == 'Gaming' ? false : true}
                                                            />
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
