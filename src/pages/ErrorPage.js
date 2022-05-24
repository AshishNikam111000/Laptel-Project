import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/errorpage.css'
import gsap from 'gsap'

const ErrorPage = () => {

    useEffect(() => {
        var t1 = gsap.timeline({ repeat: -1 });
        t1.fromTo(".one", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".two", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".three", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".four", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".five", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".six", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".seven", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".eight", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".nine", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".ten", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".eleven", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".twelve", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".thirteen", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".fourteen", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })
            .fromTo(".fifteen", { backgroundColor: "rgba(0, 0, 0, 0.3)" }, { duration: 0.4, backgroundColor: "rgba(26,188,156,0.7)" })

    }, [])


    return (
        <div className='ErrorPageContainer w-screen h-screen flex flex-row justify-evenly items-center'>
            <table className='ErrorTable text-white text-4xl text-center'>
                <tr>
                    <td>K</td> <td>V</td> <td>N</td> <td>Z</td> <td>I</td> <td>X</td> <td>M</td> <td>E</td>
                </tr>
                <tr>
                    <td>T</td> <td>A</td> <td>X</td> <td>L</td> <td className='one'>4</td> <td className='two'>0</td> <td className='three'>4</td> <td>Y</td>
                </tr>
                <tr>
                    <td>X</td> <td>W</td> <td>V</td> <td>B</td> <td>O</td> <td>Q</td> <td>D</td> <td>Y</td>
                </tr>
                <tr>
                    <td>Z</td> <td>T</td> <td className='four'>P</td> <td className='five'>A</td> <td className='six'>G</td> <td className='seven'>E</td> <td>V</td> <td>J</td>
                </tr>
                <tr>
                    <td>A</td> <td className='eight'>N</td> <td className='nine'>O</td> <td className='ten'>T</td> <td>S</td> <td>C</td> <td>E</td> <td>W</td>
                </tr>
                <tr>
                    <td>V</td> <td>X</td> <td>E</td> <td>P</td> <td>C</td> <td>F</td> <td>H</td> <td>Q</td>
                </tr>
                <tr>
                    <td>E</td> <td>S</td> <td>W</td> <td className='eleven'>F</td> <td className='twelve'>O</td> <td className='thirteen'>U</td> <td className='fourteen'>N</td> <td className='fifteen'>D</td>
                </tr>
                <tr>
                    <td>Q</td> <td>V</td> <td>O</td> <td>S</td> <td>M</td> <td>V</td> <td>F</td> <td>U</td>
                </tr>
            </table>
            <div className='ErrorData flex flex-col text-xl text-white '>
                <div className='text-3xl mb-5'>We couldn't find what you were looking for.</div>

                <div className='mb-10'>Unfortunately the page you were looking for could not be found. <br /> It may be
                    temporarily unavailable, moved or no longer exist.</div>

                <div className='mb-5'>Check the URL you entered for any mistakes and try again. <br /> Alternatively, use
                    the below links to navigate.</div>

                <div className='.Links flex flex-row gap-2 text-sm'>
                    <Link className='EL1' to="/home" > Home </Link>
                    <Link className='EL2'
                        to={{
                            pathname: "/search",
                            state: {
                                InfoStatus: true
                            }
                        }} > Search </Link>
                    <Link className='EL3' to="/about" > About Us </Link>
                    <Link className='EL4' to="/contact" > Contact Us </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage