import React from 'react'
import styled from 'styled-components'
import Video from "../Media/Video.png"
import pdf from "../Media/pdf.png"

const Title = styled.div`
    font-size : 4em;
    font-weight : 1000;
    padding-left : 5%;
    padding-top : 50px;
    color : #0a2351;
`

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    align-items :center;
    width : 40%;
    margin-left : 5%;
    height : 30vh;
    margin-top : 3%;
    
`

const Link = styled.a`
    font-size : 1.2em;
    font-weight : 500;
    text-decoration : none;
    color : #0a2351;
    display : flex;
    flex-direction : column;
`

const Thumbnail = styled.img`
    width : 300px;
    height : 300px;
    object-fit : cover;
`

const Text = styled.div`
    text-align : center;
    padding-top : 10px;
`


const Resume = () => {
    return (
        <div>
            <Title>Resume</Title>
            <Container>
                <Link href = "https://drive.google.com/file/d/13iSY4esRjyxRyi_ouT-4Pk9xnYosUUg0/view?usp=sharing" target = "_blank">
                    <Thumbnail src = {pdf} />
                    <Text>Read It Here</Text>
                </Link>
                <Link href = "https://drive.google.com/file/d/13iSY4esRjyxRyi_ouT-4Pk9xnYosUUg0/view?usp=sharing" target = "_blank">
                    <Thumbnail src = {Video} />
                    <Text>Watch It Here</Text>
                </Link>
            </Container>
        </div>
    )
}

export default Resume
