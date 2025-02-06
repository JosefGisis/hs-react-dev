import { getSecret, Island } from '@hubspot/cms-components'
import PricingTable from '../../islands/PricingTable?island'

export const Component = ({ fieldValues, hublParameters }) => {
	const stiggApiKey = getSecret('STIGG_API_KEY')

	return (
		<div>
			<Island module={PricingTable} clientOnly hydrateOn="load" stiggApiKey={stiggApiKey} userId={hublParameters.userId || 'monkey'} />
		</div>
	)
}

export { fields } from './fields'

export const meta = {
	label: 'Stigg paywall module',
}
