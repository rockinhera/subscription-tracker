import { useState } from "react"

function App() {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: "1",
      name: "Netflix",
      amount: 15.99,
      category: "Entertainment"
    },
    {
      id: "2",
      name: "Spotify",
      amount: 10.99,
      category: "Music"
    }
  ])

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [editId, setEditId] = useState(null)

  function saveSubscription(e) {
    e.preventDefault()

    if (name === "" || amount === "" || category === "") {
      alert("Please fill in all the fields")
      return
    }

    if (editId !== null) {
      const updated = subscriptions.map((subscription) => {
        if (subscription.id === editId) {
          return {
            ...subscription,
            name: name,
            amount: Number(amount),
            category: category
          }
        }

        return subscription
      })

      setSubscriptions(updated)
      setEditId(null)
    } else {
      const newSubscription = {
        id: Date.now().toString(),
        name: name,
        amount: Number(amount),
        category: category
      }

      setSubscriptions([...subscriptions, newSubscription])
    }

    setName("")
    setAmount("")
    setCategory("")
  }

  function deleteSubscription(id) {
    const updated = subscriptions.filter(
      (subscription) => subscription.id !== id
    )

    setSubscriptions(updated)
  }

  function editSubscription(subscription) {
    setEditId(subscription.id)
    setName(subscription.name)
    setAmount(subscription.amount)
    setCategory(subscription.category)
  }

  function cancelEdit() {
    setEditId(null)
    setName("")
    setAmount("")
    setCategory("")
  }

  const total = subscriptions.reduce(
    (sum, subscription) => sum + subscription.amount,
    0
  )

  return (
    <div className="min-h-screen bg-slate-200 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-center text-4xl font-bold font-serif text-slate-800">
          Subscription Tracker
        </h1>

        <p className="mt-2 font-serif text-center text-slate-500">
          Keep Track Of Your Subscriptions.
        </p>

        <form
          onSubmit={saveSubscription}
          className="mt-6 rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="text-xl font-semibold">
            {editId ? "Edit Subscription" : "Add Subscription"}
          </h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="number"
             min="0"
            step="0.01"
            placeholder="Amount (e.g. 15.99)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-3 w-full rounded border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-300"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-3 w-full rounded border border-gray-300 bg-white p-2 outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Choose category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Music">Music</option>
            <option value="Education">Education</option>
            <option value="Gaming">Gaming</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {editId !== null ? "Save Changes" : "Add"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="ml-2 rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </form>

        <div className="mt-6 rounded-lg bg-white p-6 shadow">
          <p className="text-sm font-medium text-gray-500">
            Monthly Total
          </p>

          <p className="mt-1 text-4xl font-bold text-slate-800">
            ${total.toFixed(2)}
          </p>
        </div>

        <div className="mt-6 space-y-4">

          {subscriptions.length === 0 ? (
            <div className="rounded-lg bg-white p-5 text-center shadow">
              <p className="text-gray-500">
                No subscriptions added yet.
              </p>
            </div>
          ) : (
            subscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-md hover:shadow-lg "
              >
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
                    onClick={() => deleteSubscription(subscription.id)}
                    className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  )
}

export default App 