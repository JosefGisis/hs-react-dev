import { useCount } from '../ProviderTest'

function CountIncrement() {
	const { increment } = useCount()
	return <button onClick={increment}>Increment</button>
}

export default function CountIncrementWrapper() {
	return (
		<Layout>
			<CountIncrement />
		</Layout>
	)
}
