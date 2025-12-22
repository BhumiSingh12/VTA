export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl" onClick={e => e.stopPropagation()}>
        <h2 className="text-5xl font-bold text-primary mb-4">{vehicle.plate}</h2>
        <p className="text-2xl text-gray-700 mb-6">{vehicle.owner}</p>
        <p className="text-4xl font-bold">Speed: {vehicle.speed.toFixed(0)} km/h</p>
        <button onClick={onClose} className="mt-8 bg-gray-300 px-10 py-4 rounded-xl text-xl">Close</button>
      </div>
    </div>
  );
}