export default function VehicleList({ vehicles, onSelect }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-3xl font-bold mb-6">Live Vehicles</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {vehicles.map(v => (
          <div key={v.id} onClick={() => onSelect(v)} className="p-4 border-2 rounded-xl hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-center">
              <div><strong className="text-2xl">{v.plate}</strong><p className="text-gray-600">{v.owner}</p></div>
              <div className="text-right"><p className="text-4xl font-bold text-primary">{v.speed.toFixed(0)} <span className="text-lg">km/h</span></p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}