function TotalCard({ total }) {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow">
      <p className="text-sm font-medium text-gray-500">
        Monthly Total
      </p>

      <p className="mt-1 text-4xl font-bold text-slate-800">
        ${total.toFixed(2)}
      </p>
    </div>
  )
}

export default TotalCard