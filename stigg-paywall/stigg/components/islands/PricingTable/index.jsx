import React from 'react'
import { Paywall } from '@stigg/react-sdk'

export default function PricingTable({ stiggApiKey, userId, Wrapper }) {
	if (!stiggApiKey || !userId) {
		return <div>Missing Stigg API Key or Customer ID</div>
	}
	console.log('stiggApiKey', Wrapper)
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<Wrapper>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					hello world
					<Paywall />
					{/* <Inner /> */}
				</div>
			</Wrapper>
		</React.Suspense>
	)
}

// const Inner = () => {
// 	// const stigg = useStiggContext()

// 	return (
// 		<div>
// 			<Paywall />
// 		</div>
// 	)
// }
