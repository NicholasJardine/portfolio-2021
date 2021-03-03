import styled from 'styled-components'
import FreaturePic from '../../images/bowr.jpg'


export const InfoContainer = styled.div`
   color:#fff;
   background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#091C29')
    };

    @media screen and (max-width:768px) {
        padding:100px 0;
    }
`

export const InfoWrapper = styled.div`
    z-index: 1;
    height:auto;
    width:100%;
    // position:absolute;
    padding: 0 24px;
    display:grid;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#091C29')
};`

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)
    };
    @media screen and (max-width:768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)
        };
    }
`

// background: linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.1)), url(${FreaturePic});
// background-size:cover;
// background:position:center;
// max-height:400px;
export const ProjOne = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    max-width:80vw;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden

`

const ProjImg = styled.img`
flex-shrink: 0;
min-width: 100%;
min-height: 100%;  
`

export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width:540px;
    margin-bottom:15px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color:#01bf71;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing: 1.4px;
    text-transformation: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color:#01bf71;
    text-align:left;
    margin-top:80px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#010606')
    };
    @media screen and (max-width:480px) {
    font-size:32px;
    }
`
export const Heading2 = styled.h3`
    color:#01bf71;
    text-align:left;
    margin-top:80px;
    font-size:32px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#010606')
    };
    @media screen and (max-width:480px) {
    font-size:28px;
    }
`
export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    margin-top:35px;
    font-size:18px;
    line-height:40px;
    font-weight:600;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')
    };
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;

    @media screen and (max-width:768px){
        margin-top:-160px;
    }
`

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right:0;
    height:auto;
    opacity:0.8;
`