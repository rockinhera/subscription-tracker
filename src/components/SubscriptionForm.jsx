function SubscriptionForm({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  editId,
  saveSubscription,
  cancelEdit,
  error
}) {
  return (
    <form
      onSubmit={saveSubscription}
      className="mt-6 rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold">
        {editId ? "Edit Subscription" : "Add Subscription"}
      </h2>

      {error && (
        <p className="mt-3 rounded bg-red-100 p-2 text-sm text-red-600">
          {error}
        </p>
      )}

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
        {editId ? "Save Changes" : "Add"}
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
  )
}

export default SubscriptionForm 