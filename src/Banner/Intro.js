import React from 'react'
import styled from 'styled-components'

import gh from "../Media/gh.png"
import twt from "../Media/twt.png"
import ig from "../Media/iglogo.png"

const Container = styled.div`
    width : 100vw;
    min-height : 66vh;
    height : fit-content;
    background-color : #0a2351;
    margin-top : 10px;
    display : flex;
    flex-direction : column;
`

const Text = styled.div`
    font-weight : ${props => props.weight};
    font-size : ${props => props.size}em;
    color : white;
    margin-bottom : 20px;
    margin : ${props => props.top}px 0 0 40vw;
    word-wrap : break-word;
`

Text.defaultProps = {
    top : 50
}

const Bar = styled.div`
    width : 280px;
    height : 5px;
    border-radius : 5px;
    background-color : white;
    margin : 5px 0 0 40vw;
`

const Wrapper = styled.div`
    display : flex;
    align-self : flex-end;
    width : 30vw;
    height : 10vh;
    margin-top : 10vh;
    justify-content : space-between;
    padding-right : 50px
`

const Box = styled.div`
    text-align : center;
    color : #FFFFFF;
    font-weight : 600;
    font-size : 1.1em
`

const Image = styled.img`
    height : 25px;
    margin-right : 10px;
`

const Link = styled.a`
    width : fit-content;
    height : fit-content;
`


const Intro = () => {
    return (
        <Container>
            <Text weight = {800} size = {3} top = {100}>Hi, I am Gautham Krishna K</Text>
            <Text weight = {600} size = {2}>Developer &#47;&#62; &ensp;&ensp;&ensp; Designer :&#41; &ensp;&ensp;&ensp; ML Enthusiast ^ &ensp;&ensp;&ensp;</Text>
            <Text weight = {400} size = {1.2}>Currently an Undergrad in Computer Science and Engineering at Amrita Scool of Engineering. 
                                                <br />Primarily intersted in the Web Developement, Machine learning, Problem Solving and UI/UX Design 
                                                <br /> Currently based in Palakkad, Kerala. India</Text>
            <Text weight ={600} size = {2}>Check out my work</Text>
            <Bar />
            <Wrapper>
            <Box>
                    Write <br /><br />
                    gkrishnak2001@gmail.com
                </Box>
                <Box>
                Call <br /><br />
                    +91 9848405776
                </Box>
                <Box>
                Follow <br /><br />
                    <Link href = 'https://github.com/gkrishnak01' target = "_blank"><Image src = {gh} /></Link>
                    <Link href = 'https://twitter.com/gkrishnak01_dev' target = "_blank"><Image src = {twt} /></Link>
                    <Link href = 'https://www.instagram.com/oculus_hue' target = "_blank"><Image src = {ig} /></Link>
                </Box>
            </Wrapper>

        </Container>
    )
}

export default Intro
