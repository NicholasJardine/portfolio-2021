import React from 'react'
import styled from 'styled-components'
import Re from  '../images//logo.svg'
import Ra from  '../images//rails.svg'
import Rl from  '../images//Ruby_logo.svg'
export const ImgWrap = styled.div`
    max-width:250px;
    height:100%;

    @media screen and (max-width:768px){
        margin-top:-160px;
    }
`

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right:0;
    max-height:96px;;
    opacity:0.8;
`

const StackContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:800px;
    color:#000;
    background:#fff;
`
const SoftwareContainer = styled.div`
    display:flex;
    justify-content:space between;
    align-items:center;
    width:100%;
    color:#000;
    background:#fff;
`
const Stack = () => {
    return (
        <StackContainer>
            <SoftwareContainer>
                <ImgWrap>
                    <Img src={Re}/>
                </ImgWrap>
                <ImgWrap>
                    <Img src={Ra}/>
                </ImgWrap>
                <ImgWrap>
                    <Img src={Rl}/>
                </ImgWrap>
            </SoftwareContainer>
           <h1>Stack I use</h1> 
        </StackContainer>
    )
}

export default Stack
