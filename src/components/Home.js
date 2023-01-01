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
            />
            <Section
                title="Model 3"
                description="Schedule a Demo Drive"
                backgroundImg="model-3.jpg"
            />
            <Section
                title="Model X"
                description="Schedule a Demo Drive"
                backgroundImg="model-x.jpg"
            />
            <Section
                title="Model Y"
                description="Schedule a Demo Drive"
                backgroundImg="model-y.jpg" 
            />
            <Section
                title="Solar Roof"
                description="Schedule a Demo Drive"
                backgroundImg="solar-panel.jpg"
            />
        </Container>
    )
}

export default home

const Container = styled.div`
height: 100vh
`