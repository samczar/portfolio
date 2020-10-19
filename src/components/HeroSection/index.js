import React, { useState } from 'react'

import Video from '../../videos/video.mp4'
import {
	ArrowDownward,
	ArrowRight,
	HeroBg,
	HeroBtnWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	VideoBg,
} from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Welcome to my Portfolio</HeroH1>
				<HeroP>
					This Website Site is built purely on React.js. It contains some of my
					demo's and lives projects which run on, React.js, Vue.js whilst
					backend uses Node.js or .netCore with the links to the codes on
					Github. My CV is also attached to the top.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exact="true offset={-80}"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
					>
						Check Out Projects{hover ? <ArrowDownward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
