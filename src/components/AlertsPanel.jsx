export default function AlertsPanel({ alerts }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Alerts</h2>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {alerts.length === 0 ? <p className="text-gray-500">No alerts</p> : alerts.slice(-10).map((a,i) => (
          <div key={i} className="bg-red-100 p-4 rounded-lg border border-red-300"><strong>{a.type}</strong>: {a.message}</div>
        ))}
      </div>
    </div>
  );
}