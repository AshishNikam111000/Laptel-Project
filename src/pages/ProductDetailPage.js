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
import { useHistory, useParams, useLocation } from "react-router-dom";

import '../css/default.css'
import '../css/searchpage.css'

function ProductDetailPage() {

    let { id } = useParams();
    const [productDetails, setproductDetails] = useState([{ score: 0 }]);
    const [isLoading, setLoading] = useState(false);
    const [scaledScore, setscaledScore] = useState("");
    const location = useLocation();

    useEffect(() => {
        axios.get('/search/', {
            params: {
                category: location.state.user_category, budget: location.state.user_budget,
            },
        })
            .then(res => {
                setproductDetails(res.data.filter(item => {
                    if (item.id == id) {
                        return item;
                    }
                }));
                setLoading(true);
            });
        setscaledScore(
            ((((productDetails[0].score - (location.state.minScore - 10000)) * (5 - 1)) / ((location.state.maxScore + 1000) - (location.state.minScore - 10000))) + 1)
        )
    }, [id, productDetails]);

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
        window.open(productDetails[0].redirectLink);
    }


    if (isLoading)
        return (
            <>
                <div className="Defalutgradient overflow-y-scroll overflow-x-hidden" >
                    <Navbar />
                    <TiArrowBackOutline className='h-12 w-12 mb-5 mt-10 ml-16 bg-white rounded-3xl pb-1 cursor-pointer' onClick={routeChange} />
                    <center>
                        <div className='specsContainer flex flex-col bg-white rounded-2xl mb-5' >
                            <div className='flex flex-row p-5'>
                                <img className='specsImage' src={productDetails[0].imageUrl} alt="" />
                                <div className='flex flex-col'>
                                    <div className='capitalize mt-10 mb-5 text-left'>{productDetails[0].product}</div>
                                    <div className='flex flex-row w-full'>
                                        <p className='text-left w-full'><b>{"Benchmark score - " + productDetails[0].score}</b></p>
                                        <Rating className='mb-5 w-full justify-end' name="half-rating-read" defaultValue={scaledScore > 4.5 ? 4.5 : scaledScore} precision={0.5} readOnly />
                                    </div>
                                    <CurrencyFormat className='text-right text-2xl' prefix='₹ ' thousandSeparator={true} thousandSpacing='2s' value={productDetails[0].price} displayType={"text"} />
                                </div>
                            </div>
                            <table className='specsTable ml-32 border-separate'>
                                <tr> <td>Company Name</td><td>{productDetails[0].company !== "" ? productDetails[0].company : "Not Specified"}</td> </tr>
                                <tr> <td>Model No</td><td>{productDetails[0].model_no !== "" ? productDetails[0].model_no : "Not Specified"}</td> </tr>
                                <tr> <td>Series</td><td>{productDetails[0].series !== "" ? productDetails[0].series : "Not Specified"}</td> </tr>
                                <tr> <td>RAM</td><td>{productDetails[0].ram_size !== "" ? productDetails[0].ram_size + " " + productDetails[0].ram : "Not Specified"}</td> </tr>
                                <tr> <td>Storage</td><td>{productDetails[0].storage_emcc !== "" ? productDetails[0].storage_emcc + " EMCC" : productDetails[0].storage_hdd !== "" ? productDetails[0].storage_hdd + " HDD" : productDetails[0].storage_sdd !== "" ? productDetails[0].storage_sdd + " SDD" : "Not Specified"}</td> </tr>
                                <tr> <td>Processor</td><td>{productDetails[0].processor !== "" ? productDetails[0].processor : "Not Specified"}</td> </tr>
                                <tr> <td>Processor Clock Speed</td><td>{productDetails[0].processor_clkSpeed !== "" ? productDetails[0].processor_clkSpeed : "Not Specified"}</td> </tr>
                                <tr> <td>Graphics</td><td>{productDetails[0].graphics !== "" ? productDetails[0].graphics + " " + productDetails[0].ram : "Not Specified"}</td> </tr>
                                <tr> <td>Graphics Size</td><td>{productDetails[0].gpu_size !== "" ? productDetails[0].gpu_size : "Not Specified"}</td> </tr>
                                <tr> <td>Operating System</td><td>{productDetails[0].os !== "" ? productDetails[0].os : "Not Specified"}</td> </tr>
                                <tr> <td>Architecture</td><td>{productDetails[0].architecture !== "" ? productDetails[0].architecture : "Not Specified"}</td> </tr>
                                <tr> <td>Screen Size</td><td>{productDetails[0].screen_details !== "" ? productDetails[0].screen_details : "Not Specified"}</td> </tr>
                                <tr> <td>Refresh Rate</td><td>{productDetails[0].refresh_rate !== "" ? productDetails[0].refresh_rate : "Not Specified"}</td> </tr>
                                <tr> <td>Warranty</td><td>{productDetails[0].warranty !== "" ? productDetails[0].warranty : "Not Specified"}</td> </tr>
                            </table>
                            <center>
                                <div className='flex justify-end w-4/5'>
                                    <div className='text-white bg-slate-700 rounded-full w-fit p-2 pb-4 border-2 text-3xl mb-5 cursor-pointer' onClick={openLink}> Buy Here</div>
                                </div>
                            </center>
                        </div>
                    </center>
                </div>
            </>
        )
}

export default ProductDetailPage
