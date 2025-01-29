import PokemonList from '../islands/PokemonList?island'
import { Island } from '@hubspot/cms-components'

function Example() {
	return (
		<div style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<h1>Example</h1>
			<Island module={PokemonList} total={15000} clientOnly />
		</div>
	)
}

export default Example
