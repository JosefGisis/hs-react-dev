import { Island } from '@hubspot/cms-components'
import Count from '../../islands/Count?island'
import CountIncrement from '../../islands/CountIncrement?island'
import { Layout } from '../../layout'

export const Component = ({ fieldValues }) => {
	return (
		<Layout>
			<div>Counter</div>
			<Island module={Count} hydrateOn="load" clientOnly />
			{/* <Island module={CountIncrement} hydrateOn="load" clientOnly /> */}
		</Layout>
	)
}
export { fields } from './fields'
export const meta = {
	label: 'Counter module',
}
