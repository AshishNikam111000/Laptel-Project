/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { MdInfo } from 'react-icons/md'

import '../css/laptop.css'
import SimilarLaptops from './SimilarLaptops';

const LaptopCard = (props) => {
    const [scaledScore, setScaledScore] = useState();
    useEffect(() => {
        setScaledScore((parseInt(((props.Laptop.score - (props.minScore - 10000)) * (10 - 1)) / ((props.maxScore + 1000) - (props.minScore - 10000))) + 1) * 10)
    }, [scaledScore])

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));


    const [ShowSimilar, setShowSimilar] = useState(false);
    function renderSimilar() {
        setShowSimilar(!ShowSimilar);
    }


    const history = useHistory();
    function route() {
        let path = "/product/" + props.Laptop.id;
        history.push({
            pathname: path,
            state: {
                LaptopToShow: props.Laptop,
                scaled_score: scaledScore,
                user_category: props.user_category,
                user_budget: props.user_budget,
                maxScore: props.maxScore,
                minScore: props.minScore
            }
        });
    }

    return (
        <>
            <div className='laptopContainer bg-white p-3 rounded-2xl'>
                <div className='cursor-pointer' onClick={route} >
                    <center>
                        <div className='text-xl p-1 mt-2 capitalize break-words whitespace-nowrap overflow-hidden text-ellipsis'>{props.Laptop.product}</div>
                        <img className='laptopImage mb-5 mt-5' src={props.Laptop.imageUrl} alt="" />
                        <div className='LaptDescTable text-left mb-3'>
                            <div className='flex flex-row gap-2'>
                                <div>Company</div>
                                <div>{props.Laptop.company}</div>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div>RAM</div>
                                <div>{props.Laptop.ram_size}</div>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div>Graphics</div>
                                <div>{props.Laptop.graphics}</div>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <div>Processor</div>
                                <div>{props.Laptop.processor}</div>
                            </div>
                        </div>
                    </center>
                    <div className='mb-5'>
                        <div className='flex'>
                            <div className='laptopScore w-full text-left'>Performance Score</div>
                            <div className='laptopScore w-full text-right'>{props.Laptop.score}</div>
                        </div>
                        <BorderLinearProgress variant="determinate" value={scaledScore} />
                    </div>
                    <div className='text-right w-full text-2xl mb-1'>
                        <CurrencyFormat prefix='₹ ' thousandSeparator={true} thousandSpacing='2s' value={props.Laptop.price} displayType={"text"} />
                    </div>
                </div>
                <div>
                    {
                        props.BtnShow ?
                            <center>
                                <button className='SimilarLaptopsBtn flex items-center justify-evenly w-full border-2 text-xl rounded-lg p-2 z-10' onClick={renderSimilar}>
                                    <div className='h-full'>Alternate Suggestions</div>
                                    <div className='tooltip h-full'>
                                        <MdInfo className='h-8 w-6 pt-1' />
                                        <span className="tooltiptext text-sm">
                                            Similar price range with better performance laptop.
                                        </span>
                                    </div>
                                </button>
                            </center>
                            :
                            <></>
                    }
                </div>
            </div>
            {
                ShowSimilar ?
                    <SimilarLaptops
                        SimilarLaptop={props.Laptop.similar}
                        Click={renderSimilar}
                        Scaled_Score={scaledScore}
                    />
                    :
                    <></>
            }
        </>
    )
}

export default LaptopCard