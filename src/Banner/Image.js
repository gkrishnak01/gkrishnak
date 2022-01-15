import React from 'react'
import styled from 'styled-components'
import background from "../Media/12918.jpg"

const BackgroundImage = styled.div`
    width : 100vw;
    height : 33vh;
    overflow : hidden;
`

const Image = () => {
    return (
        <BackgroundImage>
            <img src={background} alt = "background"/>
        </BackgroundImage>
    )
}

export default Image
