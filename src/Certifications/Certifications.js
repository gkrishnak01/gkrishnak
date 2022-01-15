import React from 'react'
import styled from 'styled-components'
import Certification from './Certification'
import { Certification_List } from './Certification_List'

const Title = styled.div`
    font-size : 4em;
    font-weight : 1000;
    padding-left : 5%;
    padding-top : 50px;
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

const Certifications = () => {

    const certifications = Certification_List.map(each => <Certification each = {each} />)

    return (
        <div>
            <Title>Certifications</Title>
            <Container>
                {certifications}
            </Container>
        </div>
    )
}

export default Certifications
