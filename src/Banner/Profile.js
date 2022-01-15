import React from 'react'
import styled from 'styled-components'
import profilepic from "../Media/profile.jpeg"

const Container = styled.div`
    height : 33vh;
    width : 33vh;
    position : absolute;
    left : 10%; 
    top : 16%;
    border-radius : 50%;
    border : 10px solid #FFFFFF;
    overflow : hidden;
`

const Profile = () => {
    return (
        <Container>
            <img src = {profilepic} style={{width : '100%', objectFit : 'cover'}}/>
        </Container>
    )
}

export default Profile
