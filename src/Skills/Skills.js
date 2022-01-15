import React from 'react'
import styled from 'styled-components'
import { Skill_List } from './Skill_List'

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
    justify-content : space-start;
`



const Skills = () => {

    const Skills = Skill_List.map(each => <img src = {each} style = {{height : '50px', marginTop : '30px', marginRight : '30px'}} alt = "skill"/>
        )

    return (
        <div>
            <Title>Skills</Title>
            <Container>
                {Skills}
            </Container>
        </div>
    )
}

export default Skills
