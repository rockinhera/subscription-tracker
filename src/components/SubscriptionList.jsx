import SubscriptionCard from "./SubscriptionCard"

function SubscriptionList({
  subscriptions,
  editSubscription,
  deleteSubscription
}) {
  if (subscriptions.length === 0) {
    return (
      <div className="mt-6 rounded-lg bg-white p-5 text-center shadow">
        <p className="text-gray-500">
          No subscriptions added yet.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-4">
      {subscriptions.map((subscription) => (
        <SubscriptionCard
          key={subscription.id}
          subscription={subscription}
          editSubscription={editSubscription}
          deleteSubscription={deleteSubscription}
        />
      ))}
    </div>
  )
}

export default SubscriptionList