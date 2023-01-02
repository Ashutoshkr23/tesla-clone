import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function home() {
    return (
        <Container>
            <Section
                title = "Model S"
                description= "Schedule a Demo Drive" 
                backgroundImg = "model-s.jpg"
                leftBtnText = "Custom Order"
                rightBtnText = "Existing Order"
            />
            <Section
                title="Model 3"
                description="Schedule a Demo Drive"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Order"
            />
            <Section
                title="Model X"
                description="Schedule a Demo Drive"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Order"
            />
            <Section
                title="Model Y"
                description="Schedule a Demo Drive"
                backgroundImg="model-y.jpg" 
                leftBtnText="Custom Order"
                rightBtnText="Existing Order"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Order"
            />
            <Section
                title="Solar Panel"
                description="Lowest cost Solar Panle in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Order"
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
                
            />
        </Container>
    )
}

export default home

const Container = styled.div`
height: 100vh
`