import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

function header() {
    return (
        <Container>
            <a><img src ="/images/logo.svg"/></a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu>

                </CustomMenu>
            </RightMenu>

        </Container>
    )
}

export default header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media(max-width: 768px){
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`