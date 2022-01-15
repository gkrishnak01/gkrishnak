import React from 'react'
import Image from './Image'
import Intro from './Intro'
import Profile from './Profile'

const Banner = () => {
    return (
        <div style={{position : 'relative'}}>
            <Profile />
            <Image />
            <Intro />
        </div>
    )
}

export default Banner
