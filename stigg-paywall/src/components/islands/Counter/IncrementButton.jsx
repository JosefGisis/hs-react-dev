import { useContext } from 'react'
import { CountContext } from '../../ProviderTest'

export default function IncrementButton() {
	const { increment } = useContext(CountContext)

	return (
		<button
			onClick={increment}
			style={{
				backgroundColor: 'blue',
				padding: '6px',
				borderRadius: '6px',
				color: 'white',
				width: '100px',
			}}
		>
			Increment
		</button>
	)
}
