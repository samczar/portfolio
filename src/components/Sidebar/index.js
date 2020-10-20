import React from 'react'
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
	SidebarWrapper,
	SidebarMenu,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="services" onClick={toggle}>
						Services
					</SidebarLink>
					<SidebarLink to="techstacks" onClick={toggle}>
						Tech Stack
					</SidebarLink>
					<SidebarLink to="projects" onClick={toggle}>
						Projects
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute
						href="/chibuzo_samson_anyanka.pdf"
						target="_blank"
						onClick={toggle}
					>
						Download CV
					</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
