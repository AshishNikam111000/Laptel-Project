/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import '../css/laptop.css'

const LaptopCard = (props) => {
    const [scaledScore, setScaledScore] = useState();
    useEffect(() => {
        setScaledScore((parseInt(((props.Laptop.score - (props.minScore-10000)) * (10 - 1) )/((props.maxScore+1000) - (props.minScore-10000))) + 1 ) * 10)
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

    return (
        <>
            <div className='laptopContainer bg-white p-3 rounded-2xl cursor-pointer' >
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
                <div className='text-right w-full text-2xl'>
                    <CurrencyFormat prefix='₹ ' thousandSeparator={true} thousandSpacing='2s' value={props.Laptop.price} displayType={"text"} />
                </div>
            </div>
        </>
    )
}

export default LaptopCard