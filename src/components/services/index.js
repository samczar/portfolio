import React from 'react'
import Icon1 from '../../images/svg-backend.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-mobile.svg'
import {
	ServiceP,
	ServicesWrapper,
	ServicesCard,
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesIcon,
} from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>My Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>FrontEnd Application</ServicesH2>
					<ServiceP>
						Develop frontend applications using libraries and frameworks like
						React.js and Redux, Vue.js and Vuex or Angular.
					</ServiceP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Backend Application</ServicesH2>
					<ServiceP>
						Build backend application and databases that produces REST Api's,
						using Node.js or .Net Core
					</ServiceP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Mobile Application</ServicesH2>
					<ServiceP>
						Build and Deploy Mobile Application using React Native or Native
						Script for Vue.js Script.
					</ServiceP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
