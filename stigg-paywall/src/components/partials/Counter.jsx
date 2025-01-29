import { CountProvider } from '../ProviderTest'
import { Island } from '@hubspot/cms-components'
import Count from '../islands/Count?island'
import CountIncrement from '../islands/CountIncrement?island'

export default function Counter() {
	return (
		<CountProvider>
			<div>Counter</div>
			<Island module={Count} clientOnly />
			<Island module={CountIncrement} clientOnly />
		</CountProvider>
	)
}
