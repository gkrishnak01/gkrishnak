import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { Project_List } from './Project_List'

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

const Projects = () => {

   
     const  projects = Project_List.map(each => <Project each = {each} />)
   

    return (
        <div>
            <Title>Projects</Title>
            <Container>
                {console.log(projects)}
                {projects ? projects : null}
            </Container>
        </div>
    )
}

export default Projects
