function SubscriptionCard({
  subscription,
  editSubscription,
  deleteSubscription
}) {
  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subscription?"
    )

    if (confirmed) {
      deleteSubscription(subscription.id)
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-md hover:shadow-lg">
      <h2 className="text-xl font-bold">
        {subscription.name}
      </h2>

      <div className="mt-2 flex items-center gap-3">
        <span className="font-semibold">
          ${subscription.amount.toFixed(2)}
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
          {subscription.category}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => editSubscription(subscription)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default SubscriptionCard