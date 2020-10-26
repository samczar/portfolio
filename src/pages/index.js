import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { AboutMe } from '../components/InfoSection/Data'
import Services from '../components/services'
import Projects from '../components/projects'
import Stack from '../components/stacks'
import Footer from '../components/Footer'
// import FrontFramework from '../components/stacks/FrontFramework'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...AboutMe} />
			<Services />
			<Stack />

			<Projects />
			<Footer />
		</>
	)
}

export default Home
