import { useContext } from 'react'
import { CountContext } from '../../ProviderTest'

export default function Count() {
	const { count } = useContext(CountContext)

	return (
		<div>
			<p>COUNT: {count}</p>
		</div>
	)
}
