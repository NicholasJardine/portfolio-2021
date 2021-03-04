import React from 'react'
import styled from 'styled-components'
import Re from  '../images//logo.svg'
import Ra from  '../images//rails.svg'
import Rl from  '../images//Ruby_logo.svg'
import Icon1 from '../images//react-2.svg'
import Icon2 from '../images//Ruby_logo.svg'
import Icon3 from '../images//rails.svg'
import Icon4 from '../images/css3.png'
import Icon5 from '../images/html5.svg'
import Icon6 from '../images/sass-1.svg'
import Icon7 from '../images/js.svg'
import Icon8 from '../images/json.svg'

export const ServicesContainer = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
   background: #fff;
    @media screen and (max-width: 768px){
        height: auto;
    }

    @media screen and (max-width: 400px){
        height: auto;
    }
`


export const ServicesWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
   
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 100%;
    max-height: 340px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom:48px;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`
export const ServicesIcon = styled.img`
   height:160px;
   width:160px;
   margin-bottom:10px; 
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #091C29;
    margin-bottom: 64px;
    margin-top: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`



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
           <ServicesContainer id="services">
            <ServicesH1>Stack I Use</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>

                    <ServicesIcon src={Icon1}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> We help reduce your fees and increase your overall revenue.</ServicesP> */}
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    {/* <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP> You can access our platform online anywhere in the world.</ServicesP> */}
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    {/* <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
                </ServicesCard>

            </ServicesWrapper>
            <ServicesH1>Other Experience</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>

                    <ServicesIcon src={Icon7}/>
                    {/* <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP> We help reduce your fees and increase your overall revenue.</ServicesP> */}
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon8}/>
                    {/* <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP> You can access our platform online anywhere in the world.</ServicesP> */}
                </ServicesCard>



            </ServicesWrapper>

            
        </ServicesContainer>
        
    )
    
}

export default Stack
