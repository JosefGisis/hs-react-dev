import React, { useEffect, useState } from 'react'

function PokemonList({ total }) {
	const [pokemon, setPokemon] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchPokemon = async () => {
			setIsLoading(true)
			try {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${total || 10000}`)

				if (!response.ok) {
					throw new Error('Failed to fetch pokemon')
				}

				const data = await response.json()

				setPokemon(data.results)
				setIsLoading(false)
			} catch {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchPokemon()
	}, [])

	return (
		<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<h1>Pokemon List</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>Failed to fetch pokemon</p>
			) : (
				<div
					style={{
						display: 'flex',
						width: '100%',
						maxWidth: '100%',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignContent: 'center',
						gap: 20,
						paddingRight: 50,
						paddingLeft: 50,
					}}
				>
					{pokemon.map(({ name }, index) => (
						<div key={index}>
							<p>{name}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PokemonList
