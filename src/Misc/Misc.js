import React from 'react'
import styled from 'styled-components'
import { Photo_List } from './Photo_List'

const Title = styled.div`
    font-size : 4em;
    font-weight : 1000;
    padding-left : 5%;
    padding-top : 100px;
    color : #0a2351;

`

const Container = styled.div`
    width : 90%;
    margin-left : auto;
    margin-right : auto;
    margin-top : 20px;
    display : flex;  
    flex-wrap : wrap;
    justify-content : flex-start;
`

const Image = styled.img`
    width : 20%;
    margin-right : 3%;
    margin-bottom : 20px;
`

const Misc = () => {

    const images = Photo_List.map(each => <Image src ={each} />)

    return (
        <div>
            <Title>What else do i do ?</Title>
            <Container>
                {images}
            </Container>
        </div>
    )
}

export default Misc
