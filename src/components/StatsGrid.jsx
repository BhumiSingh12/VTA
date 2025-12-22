export default function StatsGrid({ vehicles, alerts, watchlist }) {
  const active = vehicles.filter(v => v.status === 'active').length;
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center"><h3 className="text-gray-600">Total</h3><p className="text-5xl font-bold text-primary">{vehicles.length}</p></div>
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center"><h3 className="text-gray-600">Active</h3><p className="text-5xl font-bold text-green-600">{active}</p></div>
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center"><h3 className="text-gray-600">Alerts</h3><p className="text-5xl font-bold text-red-600">{alerts.length}</p></div>
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center"><h3 className="text-gray-600">Watchlist</h3><p className="text-5xl font-bold text-orange-600">{watchlist.length}</p></div>
    </div>
  );
}