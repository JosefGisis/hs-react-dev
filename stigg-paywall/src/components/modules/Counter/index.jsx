import { Island } from '@hubspot/cms-components'
import Counter from '../../islands/Counter?island'

export const Component = ({ fieldValues }) => {
	return <Island module={Counter} hydrateOn="load" clientOnly />
}
export { fields } from './fields'
export const meta = {
	label: 'Counter module',
}
