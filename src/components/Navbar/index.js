import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
	Nav,
	NavLogo,
	NavbarContainer,
	MobileIcon,
	NavItem,
	NavLinks,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElement'

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	const toggleHome = () => {
		scroll.scrollToTop()
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							<img src="/logo.png" alt="logo" />
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks
									to="about"
									smooth={true}
									duration={500}
									spy={true}
									exact="true offset={-80}"
								>
									About Me
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to="services"
									smooth={true}
									duration={500}
									spy={true}
									exact="true offset={-80}"
								>
									Services
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to="techstacks"
									smooth={true}
									duration={500}
									spy={true}
									exact="true offset={-80}"
								>
									Tech Stack
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="projects"
									smooth={true}
									duration={500}
									spy={true}
									exact="true offset={-80}"
								>
									Projects
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink href="/chibuzo_samson_anyanka.pdf" target="_blank">
								Download CV
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
