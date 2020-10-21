import React from 'react'
import Data from './Data.json'

import {
	ProjectP,
	ProjectA,
	ProjectsWrapper,
	ProjectsCard,
	ProjectsContainer,
	ProjectsH1,
	ProjectsH2,
	ProjectsIcon,
} from './ProjectsElements'

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsH1>My Projects</ProjectsH1>
			<ProjectsWrapper>
				{Data.map((info, index) => {
					return (
						<ProjectsCard key={index}>
							<ProjectsIcon src={info.image} />
							<ProjectsH2>{info.name}</ProjectsH2>
							<ProjectP>Tech: {info.tech}</ProjectP>
							<ProjectA href={info.view} target="_blank">
								View
							</ProjectA>
							{info.gitLink && (
								<ProjectA href={info.gitLink} target="_blank">
									Git Link
								</ProjectA>
							)}
						</ProjectsCard>
					)
				})}
			</ProjectsWrapper>
		</ProjectsContainer>
	)
}

export default Projects
