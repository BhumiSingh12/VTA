export default function WatchlistPanel({ watchlist }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">Watchlist</h2>
      {watchlist.map((w,i) => (
        <div key={i} className="bg-orange-100 p-4 rounded-lg border border-orange-400 mb-3">
          <strong className="text-xl">{w.plate}</strong> - {w.level}<p className="text-gray-700">{w.reason}</p>
        </div>
      ))}
    </div>
  );
}