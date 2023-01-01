import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
        <Wrap>

            <Itemtext>
                <h1>Model S</h1>
                <p>Schedule a Demo Drive</p>
            </Itemtext>
            <Buttongroup>
            <Buttons>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Order
                </RightButton>
                <DownArrow src="/images/down-arrow.svg" alt="down" />
            </Buttons>
            </Buttongroup>
            
            
        </Wrap>
    )
}

export default Section

{/*Always put ; on the end of property ,  use align spelling correctly*/}

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
bavckground-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const Itemtext = styled.div`
padding-top: 15vh;
text-align: center;
`

const Buttongroup = styled.div`
display: flex;
margin-bottom:30px;

`

const RightButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width:256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
opacity: 0.85;
padding: 10px; 
text-transform: uppercase;
curson: pointer;
margin: 12px;
` 

const LeftButton = styled(RightButton)`
background:white;
opacity: 0.65;
color:black;
`

const DownArrow = styled.div`
margin-top: 20px;
height: 40px;
width:40px;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`