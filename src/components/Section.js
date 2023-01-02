import React from 'react'
import styled from 'styled-components'
{/*we can pass the value by two ways one that is used other we cqn unpack it like :- function setion ({title ,description , etc }) in this cas we dont have to write props.title we can dircetly use title*/}
function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>

            <Itemtext>
                <h1>{title}</h1>
                <p>{description}</p>
            </Itemtext>
            <Buttongroup>
            <Buttons>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                    {rightBtnText && <RightButton>
                        {rightBtnText}
                    </RightButton>}

                
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
background-image: ${props => `url("/images/${props.bgImage}")`}
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
background:white;
height: 40px;
width:256px;
color: black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
opacity: 0.85;
padding: 10px; 
text-transform: uppercase;
curson: pointer;
margin: 12px;
` 

const LeftButton = styled(RightButton)`
background:black;
opacity: 0.9;
color:white;
`

const DownArrow = styled.div`
margin-top: 20px;
height: 40px;
width:40px;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`