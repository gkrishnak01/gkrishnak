import React from "react";
import styled from "styled-components";

const Card = styled.div`
    padding : 20px;
    display : flex;
    flex-direction : column;
    margin-bottom : 10px;
    color : #0a2351;
    margin-left : 4%;
`

const Abstract = styled.div`
    margin-top : 10px;
    width : 95%;
    overflow : hidden;
    font-weight : ${props => props.weight};
    font-size : 1.1em;
`
Abstract.defaultProps = {
    weight : 550
} 

const Title = styled.div`
    font-size : 4em;
    font-weight : 1000;
    padding-left : 5%;
    padding-top : 100px;
    color : #0a2351;
`

const Academics = () => {
    return (
        <div>
            <Title>Academic History</Title>
            <Card>
                <Abstract>
                    B.Tech in Computer Science and Engineering (2019 - Present) <br /> 
                    Amrita School Of Engineering, Ettimadai, Coimbatore, India <br />
                    CGPA : 8.38 / 10 (Sem 5)
                </Abstract>
            </Card>

            <Card>
                <Abstract> 
                    Higher Secondary Education (2017 - 2019)<br />
                    Physics, Chemistry, Mathematics, Computer Science, English<br />
                    Bhavan's Vidya Mandir, Chithali, Palakkad, Kerala, India<br />
                    Central Board Of Secondary Education<br />
                    Percentage : 89.6 % 
                </Abstract>
            </Card>

            <Card>
                <Abstract>
                    Secondary Education (2016 - 17) <br />
                    Bhavan's Vidya Mandir, Chithali, Palakkad, Kerala, India<br />
                    Central Board Of Secondary Education<br />
                    CGPA : 10 / 10 
                </Abstract>
            </Card>
        </div>
    )
}

export default Academics
