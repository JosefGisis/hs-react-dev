import { Island } from '@hubspot/cms-components'
import PricingTable from '../islands/PricingTable?island'
import { StiggProvider } from '@stigg/react-sdk'

export default function StiggPaywall() {
	return (
		<div>
			Bingo
			<Inner />
		</div>
	)
}

const Provider = (props) => {
	const  { children } = props ?? {}
	if (!children) {
		return null
	}
	return (
		<StiggProvider
		>
			{children}
		</StiggProvider>
	)
}

const Inner = () => {
	return (
		<Island
			module={PricingTable}
			userId={'monkey'}
			hydrateOn="load"
			clientOnly={false}
			Wrapper={Provider}
		/>
	)
}
