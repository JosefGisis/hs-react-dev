import React from 'react'
import { CountProvider } from './ProviderTest'

export const Layout = ({ children }) => {
	return (
		<React.StrictMode>
			<CountProvider>{children}</CountProvider>
		</React.StrictMode>
	)
}
