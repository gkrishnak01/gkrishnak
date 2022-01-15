import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    height : 50vh;
    width : 30%;
    box-shadow : 0 0 10px 0 rgb(50 50 50 / 75%);
    border-radius : 10px;
    display : flex;
    flex-direction : column;
    margin-right : 3%;
    margin-bottom : 50px;
    color : #0a2351;
`

const Cover = styled.img`
    width : 100%;
    height : 50%;
    border-radius : 10px 10px 0px 0px;
    object-fit : cover;
`

const Abstract = styled.div`
    margin-top : 10px;
    padding : 10px;
    width : 95%;
    overflow : hidden;
    font-weight : ${props => props.weight};
    font-size : 1em;
`
Abstract.defaultProps = {
    weight : 400
} 


const Project = (props) => {
    return (
        <Card>
            {console.log(props)}
            <Cover src = {props.each.image} />
            <Abstract weight = {600}>{props.each.title}</Abstract>
            <Abstract>{props.each.desc}</Abstract>
            <Abstract>Tools Used : {props.each.tools}</Abstract>
        </Card>
    )
}

export default Project
