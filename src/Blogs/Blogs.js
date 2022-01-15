import React from 'react'
import styled from 'styled-components'
import Blog from './Blog'
import { Blog_List } from './Blog_List'

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

const Blogs = () => {

    const blogs = Blog_List.map(each => <Blog each = {each} />
        )
    return (
        <div>
            <Title>Blogs</Title>
            <Container>
                {blogs}
            </Container>
        </div>
    )
}

export default Blogs
