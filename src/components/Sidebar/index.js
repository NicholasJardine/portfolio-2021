import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <Icon onClick={toggle}>

                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Contact
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>

                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar
