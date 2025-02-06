
import {} from '@stigg/react-sdk'
export default function PaywallComp() {
	return (
		<div>
			<p>I had to comment this out</p>
			{/* <Paywall
				onPlanSelected={({ plan, customer, intentionType }) => {
					switch (intentionType) {
						case SubscribeIntentionType.START_TRIAL:
							// TODO: provision trial subscription
							break
						case SubscribeIntentionType.REQUEST_CUSTOM_PLAN_ACCESS:
							// TODO: redirect to contact us form
							break
						case SubscribeIntentionType.CHANGE_UNIT_QUANTITY:
						case SubscribeIntentionType.UPGRADE_PLAN:
						case SubscribeIntentionType.DOWNGRADE_PLAN:
							// TODO: show checkout experience
							break
						case SubscribeIntentionType.CANCEL_SCHEDULED_UPDATES:
							// TODO: show confirmation dialog
							// once confirmed, cancel the scheduled subscription update
							break
					}
				}}
			/> */}
		</div>
	)
}
