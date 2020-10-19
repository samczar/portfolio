import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { AboutMe, Projects, TechStack } from '../components/InfoSection/Data'
import Services from '../components/services'
import Footer from '../components/Footer'

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
			<InfoSection {...TechStack} />
			<InfoSection {...Projects} />
			<Footer />
		</>
	)
}

export default Home
