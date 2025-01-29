import { ModuleFields, NumberField } from '@hubspot/cms-components/fields'

export const fields = (
	<ModuleFields>
		<NumberField label={'Starting counter value'} name={'starting_counter_value'} displayWidth="half_width" default={0} min={0} max={10000} />
	</ModuleFields>
)
