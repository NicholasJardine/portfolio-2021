import React, {useState} from 'react'
import Video from '../../images/video.mp4'
import Button from '../ButtonElement'
import InfoType from '../InfoType'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Link} from 'react-scroll'
import styled from 'styled-components'

const FirstButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'transparent' : '#101522')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')
    };
    color: ${({dark}) => (dark ? '#010606' : ' #fff')
    };
    font-size: ${({fontBig}) => (fontBig ? '20px' : ' 16px')
    };

    outline:none;
    display:flex;
    jusify-conten:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    border-color: '#101522';
    border:solid 1px;
    margin-top:56px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg> 
                <VideoBg autoPlay loop muted src={Video}type='video/mp4'>

                </VideoBg>


            </HeroBg>

            <>

                </>
            <HeroContent>
            <HeroH1>Hi, I'm Nicholas Jardine</HeroH1>

                <HeroH1><InfoType/></HeroH1>

                <HeroBtnWrapper>
                    <FirstButton to="signup" primary='true'  dark='true' onMouseEnter={onHover} onMouseLeave={onHover} primary="false">Get Started{hover ? <ArrowForward /> : <ArrowRight /> }
                    </FirstButton>
                </HeroBtnWrapper> 
                {/* <HeroP>
                    Sign up for a new account today and recieve $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true'>Get Started{hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
