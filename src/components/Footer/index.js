import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterWrap,
	SocialIconLink,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	SocialIcons,
	WebsiteRights,
} from './FooterElement'

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> About Me</FooterLinkTitle>
							<FooterLink to="/">My Stacks</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">My Services</FooterLink>
							<FooterLink to="/">My Projects</FooterLink>
							<FooterLink to="/">Contact Me</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							SamCzar
						</SocialLogo>
						<WebsiteRights>
							SamCzar {new Date().getFullYear()} All rights reversed .
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com/samczar"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
