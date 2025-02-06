import { CountProvider } from '../ProviderTest'
import { Island } from '@hubspot/cms-components'
import CounterIsland from '../islands/Counter?island'

export default function Counter() {
	return <Island module={CounterIsland} />
}
