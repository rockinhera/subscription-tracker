import { useState } from "react"
import SubscriptionForm from "./components/SubscriptionForm"
import SubscriptionList from "./components/SubscriptionList"
import TotalCard from "./components/TotalCard"

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
  const [error, setError] = useState("")

  function saveSubscription(e) {
    e.preventDefault()

    if (name === "" || amount === "" || category === "") {
      setError("Please fill in all the fields")
      return
    }

    setError("")

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
    setError("")
  }

  function cancelEdit() {
    setEditId(null)
    setName("")
    setAmount("")
    setCategory("")
    setError("")
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

        <p className="mt-2 text-center font-serif text-slate-500">
          Keep Track Of Your Subscriptions.
        </p>

        <SubscriptionForm
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          editId={editId}
          saveSubscription={saveSubscription}
          cancelEdit={cancelEdit}
          error={error}
        />

        <TotalCard total={total} />

        <SubscriptionList
          subscriptions={subscriptions}
          editSubscription={editSubscription}
          deleteSubscription={deleteSubscription}
        />

      </div>
    </div>
  )
}

export default App 