import { Island } from '@hubspot/cms-components'
import PricingTable from '../islands/PricingTable?island'
import {} from '@stigg/react-sdk'

export default function StiggPaywall() {
	// const stiggApiKey = getSecret('STIGG_API_KEY')

	return (
		<div>
			<Island
				module={PricingTable}
				// stiggApiKey={}
				userId={'monkey'}
				clientOnly
			/>
		</div>
	)
}
