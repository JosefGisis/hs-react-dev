import React, { createContext, useState, useContext, ReactNode } from 'react'

const CountContext = createContext(undefined)

export const CountProvider = ({ children }) => {
	const [count, setCount] = useState(0)

	const increment = () => setCount(count + 1)

	const reset = () => setCount(0)

	return <CountContext.Provider value={{ count, increment, reset }}>{children}</CountContext.Provider>
}

export const useCount = () => {
	const context = useContext(CountContext)
	if (!context) {
		throw new Error('useCount must be used within a CountProvider')
	}
	return context
}
