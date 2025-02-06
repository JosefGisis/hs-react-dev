import { useCallback, useEffect, useState } from 'react'
import { CountContext } from '../../ProviderTest'
import Count from './Count'
import IncrementButton from './IncrementButton'

export default function Counter() {
	const [count, setCount] = useState(0)

	const increment = useCallback(() => setCount((prev) => prev + 1), [setCount])

	useEffect(() => {
		console.log('count:', count)
	}, [count])

	return (
		<div>
			<CountContext.Provider value={{ count, increment }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<h1>Counter</h1>
					<Count />
					<IncrementButton />
				</div>
			</CountContext.Provider>
		</div>
	)
}
