import React from 'react'
import Button from '../ButtonElement'
import InfoType from '../InfoType';
import { InfoContainer, InfoWrapper, InfoRow, Heading,Heading2, Column1, Column2, TextWrapper, Subtitle, BtnWrap, TopLine, ImgWrap, Img, ProjOne} from './InfoSectionElements'
import FeaturePic from '../../images/burger.jpg'
import ProjectPic from '../../images/business.jpg'
import ProjectPic2 from '../../images/p.jpg'
import ProjectPic3 from '../../images/raiders.jpg'
import styled from 'styled-components'

const ProjImg = styled.img`
flex-shrink: 0;
min-width: 100%;
min-height: 100%;  
`
const InfoSection = ({lightBg, img, img2, id, imgStart, description, topLine, lightText, darkText, headline, buttonLabel, alt, primary, dark, dark2, projectTitle,projectTitle2,projectTitle3,projectTitle4,projectTitle5,projectTitle6, image }) => {

    console.log(img);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper lightBg={lightBg}>
                <Heading lightText='true'>{headline}</Heading>
{/* 
                <ProjOne>

                    <ProjImg src={FreaturePic}/>
                </ProjOne> */}

                    <InfoRow imgStart={imgStart} lightBg={lightBg}>

                        <Column1>
                        <TextWrapper>
                            {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
                            <Heading2 lightText={lightText}>{projectTitle}</Heading2>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home"                                                          smooth={true}
                                                duration={500}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                primary={primary ? 1: 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1: 0}>
                                                {buttonLabel}

                                            </Button>
                                        </BtnWrap>
                        </TextWrapper>
                        
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt} />

                            {/* <img src={require ('../../images/10.png')} alt="car" /> */}
                        </ImgWrap>
                        </Column2>
                    </InfoRow>

                    <InfoRow imgStart={imgStart} lightBg={lightBg}>

                    <Column1>
                    <TextWrapper>
                        {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
                        <Heading2 lightText={lightText}>{projectTitle2}</Heading2>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Button to="home"                                                          smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1: 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1: 0}>
                                            {buttonLabel}

                                        </Button>
                                    </BtnWrap>
                    </TextWrapper>

                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img src={FeaturePic} />

                        {/* <img src={require ('../../images/10.png')} alt="car" /> */}
                    </ImgWrap>
                    </Column2>
            </InfoRow>

            <InfoRow imgStart={imgStart} lightBg={lightBg}>

<Column1>
<TextWrapper>
    {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
    <Heading2 lightText={lightText}>{projectTitle3}</Heading2>
    <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button to="home"                                                          smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1: 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0}>
                        {buttonLabel}

                    </Button>
                </BtnWrap>
</TextWrapper>

</Column1>
<Column2>
<ImgWrap>
    <Img src={ProjectPic} />

    {/* <img src={require ('../../images/10.png')} alt="car" /> */}
</ImgWrap>
</Column2>
</InfoRow>

<InfoRow imgStart={imgStart} lightBg={lightBg}>

<Column1>
<TextWrapper>
    {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
    <Heading2 lightText={lightText}>{projectTitle4}</Heading2>
    <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button to="home"                                                          smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1: 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0}>
                        {buttonLabel}

                    </Button>
                </BtnWrap>
</TextWrapper>

</Column1>
<Column2>
<ImgWrap>
    <Img src={ProjectPic2} />

    {/* <img src={require ('../../images/10.png')} alt="car" /> */}
</ImgWrap>
</Column2>
</InfoRow>

<InfoRow imgStart={imgStart} lightBg={lightBg}>

<Column1>
<TextWrapper>
    {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
    <Heading2 lightText={lightText}>{projectTitle5}</Heading2>
    <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button to="home"                                                          smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1: 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0}>
                        {buttonLabel}

                    </Button>
                </BtnWrap>
</TextWrapper>

</Column1>
<Column2>
<ImgWrap>
    <Img src={ProjectPic3} />

    {/* <img src={require ('../../images/10.png')} alt="car" /> */}
</ImgWrap>
</Column2>
</InfoRow>


                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
