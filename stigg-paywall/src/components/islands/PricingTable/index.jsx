// import PaywallComp from './Paywall'
// import PaywallComp from './Paywall'
// import {} from '@stigg/react-sdk'
import { StiggProvider } from '@stigg/react-sdk'

export default function PricingTable({ stiggApiKey, userId }) {
	if (!stiggApiKey || !userId) {
		return <div>Missing Stigg API Key or Customer ID</div>
	}

	return (
		<StiggProvider apiKey={stiggApiKey} userId={userId}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				hello world
				{/* <StiggContext.Provider> */}
				{/* <PaywallComp /> */}
				{/* </StiggContext.Provider> */}
			</div>
		</StiggProvider>
	)
}
