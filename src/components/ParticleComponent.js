/* eslint-disable no-unused-vars */
import React from 'react'
import Particles from 'react-particles-js'

function ParticleComponent() {
    if (window.innerWidth > 768){
        return (
            <>
                <Particles className="absolute h-screen w-screen backgroundParticle"
                    params={{
                            "particles": {
                                "number": {
                                    "value": 85
                                },
                                "size": {
                                    "value": 3
                                }
                            }
                    }} />
            </>
        )
    }
    else{
        return (
            <>
                <Particles className="absolute h-screen w-screen backgroundParticle"
                    params={{
                            "particles": {
                                "number": {
                                    "value": 30
                                },
                                "size": {
                                    "value": 3
                                }
                            }
                    }} />
            </>
        )
    }

}

export default ParticleComponent
