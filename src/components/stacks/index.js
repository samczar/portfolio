import React from 'react'
import Data from './data'
import { Doughnut } from 'react-chartjs-2'

import {
	StacksWrapper,
	StacksCard,
	StacksContainer,
	StacksH1,
	StacksH2,
} from './StacksElements'

const Stacks = () => {
	return (
		<StacksContainer id="techstacks">
			<StacksH1>My Tech Stack Use</StacksH1>
			<StacksWrapper>
				<StacksCard>
					<StacksH2>{Data[0].Header}</StacksH2>
					<Doughnut data={Data[0]} />
				</StacksCard>
				<StacksCard>
					<StacksH2>{Data[1].Header}</StacksH2>
					<Doughnut data={Data[1]} />
				</StacksCard>
				<StacksCard>
					<StacksH2>{Data[2].Header}</StacksH2>
					<Doughnut data={Data[2]} />
				</StacksCard>
				<StacksCard>
					<StacksH2>{Data[3].Header}</StacksH2>
					<Doughnut data={Data[3]} />
				</StacksCard>
				<StacksCard>
					<StacksH2>{Data[4].Header}</StacksH2>
					<Doughnut data={Data[4]} />
				</StacksCard>
				{/* {Data.map((info, index) => {
					return (
						<StacksCard key={index}>
							<StacksH2>{info.Header}</StacksH2>
							<Doughnut data={info} />
						</StacksCard>
					)
				})} */}
			</StacksWrapper>
		</StacksContainer>
	)
}

export default Stacks
