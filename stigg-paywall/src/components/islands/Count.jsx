import { useCount } from '../ProviderTest'
import { Layout } from '../layout'

function Count() {
	const { count, countIncrement } = useCount()

	return (
		<div>
			<h1>This is the current count: {count}</h1>
			<button onClick={countIncrement}>Increment</button>
		</div>
	)
}

export default function CountWrapper() {
	return (
		<Layout>
			<Count />
		</Layout>
	)
}
