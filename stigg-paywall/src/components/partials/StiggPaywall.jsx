import { getSecret, Island } from '@hubspot/cms-components'
import PricingTable from '../islands/PricingTable?island'

export default function StiggPaywall({ title = 'Stigg paywall', userId }) {
	const stiggApiKey = getSecret('STIGG_API_KEY')

	return (
		<div>
			<Island module={PricingTable} stiggApiKey={stiggApiKey} userId={userId || 'monkey'} />
		</div>
	)
}
