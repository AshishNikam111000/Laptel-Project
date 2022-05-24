/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Rating } from '@mui/material';
import Navbar from '../components/Navbar'
import CurrencyFormat from 'react-currency-format';
import { TiArrowBackOutline } from 'react-icons/ti'
import { MdShoppingCart } from 'react-icons/md'
import { useHistory, useParams, useLocation } from "react-router-dom";

import '../css/default.css'
import '../css/searchpage.css'

function ProductDetailPage() {
    const location = useLocation();

    const history = useHistory();
    const routeChange = () => {
        history.push({
            pathname: `/product`,
            state: {
                user_category: location.state.user_category,
                user_budget: location.state.user_budget
            }
        });
    }

    function openLink() {
        window.open(location.state.LaptopToShow.redirectLink);
    }


    return (
        <>
            <div className="Defalutgradient overflow-y-scroll overflow-x-hidden" >
                <Navbar />
                <TiArrowBackOutline className='h-12 w-12 mb-5 mt-10 ml-16 bg-white rounded-3xl pb-1 cursor-pointer' onClick={routeChange} />
                <center>
                    <div className='specsContainer flex flex-col bg-white rounded-2xl mb-5' >
                        <div className='flex flex-row p-5'>
                            <img className='specsImage' src={location.state.LaptopToShow.imageUrl} alt="" />
                            <div className='flex flex-col'>
                                <div className='capitalize mt-10 mb-5 text-left'>{location.state.LaptopToShow.product}</div>
                                <div className='flex flex-row w-full'>
                                    <p className='text-left w-full'><b>{"Benchmark score - " + location.state.LaptopToShow.score}</b></p>
                                    <Rating className='mb-5 w-full justify-end' name="half-rating-read" defaultValue={location.state.scaled_score > 4.5 ? 4.5 : location.state.scaled_score} precision={0.5} readOnly />
                                </div>
                                <CurrencyFormat className='text-right text-2xl' prefix='₹ ' thousandSeparator={true} thousandSpacing='2s' value={location.state.LaptopToShow.price} displayType={"text"} />
                            </div>
                        </div>
                        <table className='specsTable ml-32 border-separate'>
                            <tr> <td>Company Name</td><td>{location.state.LaptopToShow.company !== "" ? location.state.LaptopToShow.company : "Not Specified"}</td> </tr>
                            <tr> <td>Model No</td><td>{location.state.LaptopToShow.model_no !== "" ? location.state.LaptopToShow.model_no : "Not Specified"}</td> </tr>
                            <tr> <td>Series</td><td>{location.state.LaptopToShow.series !== "" ? location.state.LaptopToShow.series : "Not Specified"}</td> </tr>
                            <tr> <td>RAM</td><td>{location.state.LaptopToShow.ram_size !== "" ? location.state.LaptopToShow.ram_size + " " + location.state.LaptopToShow.ram : "Not Specified"}</td> </tr>
                            <tr> <td>Storage</td><td>{location.state.LaptopToShow.storage_emcc !== "" ? location.state.LaptopToShow.storage_emcc + " EMCC" : location.state.LaptopToShow.storage_hdd !== "" ? location.state.LaptopToShow.storage_hdd + " HDD" : location.state.LaptopToShow.storage_sdd !== "" ? location.state.LaptopToShow.storage_sdd + " SDD" : "Not Specified"}</td> </tr>
                            <tr> <td>Processor</td><td>{location.state.LaptopToShow.processor !== "" ? location.state.LaptopToShow.processor : "Not Specified"}</td> </tr>
                            <tr> <td>Processor Clock Speed</td><td>{location.state.LaptopToShow.processor_clkSpeed !== "" ? location.state.LaptopToShow.processor_clkSpeed : "Not Specified"}</td> </tr>
                            <tr> <td>Graphics</td><td>{location.state.LaptopToShow.graphics !== "" ? location.state.LaptopToShow.graphics + " " + location.state.LaptopToShow.ram : "Not Specified"}</td> </tr>
                            <tr> <td>Graphics Size</td><td>{location.state.LaptopToShow.gpu_size !== "" ? location.state.LaptopToShow.gpu_size : "Not Specified"}</td> </tr>
                            <tr> <td>Operating System</td><td>{location.state.LaptopToShow.os !== "" ? location.state.LaptopToShow.os : "Not Specified"}</td> </tr>
                            <tr> <td>Architecture</td><td>{location.state.LaptopToShow.architecture !== "" ? location.state.LaptopToShow.architecture : "Not Specified"}</td> </tr>
                            <tr> <td>Screen Size</td><td>{location.state.LaptopToShow.screen_details !== "" ? location.state.LaptopToShow.screen_details : "Not Specified"}</td> </tr>
                            <tr> <td>Refresh Rate</td><td>{location.state.LaptopToShow.refresh_rate !== "" ? location.state.LaptopToShow.refresh_rate : "Not Specified"}</td> </tr>
                            <tr> <td>Warranty</td><td>{location.state.LaptopToShow.warranty !== "" ? location.state.LaptopToShow.warranty : "Not Specified"}</td> </tr>
                        </table>
                        <center>
                            <div className='flex justify-end w-4/5'>
                                <div className='flex items-center text-white bg-emerald-600 rounded-full w-fit pl-4 pr-4 pt-2 pb-3 text-xl mb-5 cursor-pointer' onClick={openLink}>
                                    Buy Here
                                    <MdShoppingCart className='ml-2 mt-1 h-7 w-7' />
                                </div>
                            </div>
                        </center>
                    </div>
                </center>
            </div>
        </>
    )
}

export default ProductDetailPage
