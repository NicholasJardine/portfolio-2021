import React from 'react'
import{    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaYoutube} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            NJCode
                        </SocialLogo>
                        {/* <WebsiteRights>Golden © 2021 All rights reserved.</WebsiteRights> */}
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
