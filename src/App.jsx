import { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import MapPanel from './components/MapPanel';
import VehicleList from './components/VehicleList';
import AlertsPanel from './components/AlertsPanel';
import WatchlistPanel from './components/WatchlistPanel';
import SpeedChart from './components/SpeedChart';
import VehicleModal from './components/VehicleModal';
import Toast from './components/Toast';
import { generateVehicles, watchlist } from './lib/simulation';

function App() {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [isSimulating, setIsSimulating] = useState(true);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  useEffect(() => {
    setVehicles(generateVehicles());

    const interval = setInterval(() => {
      if (!isSimulating || !user) return;

      setVehicles(prev => prev.map(v => {
        if (v.status === 'active' && Math.random() > 0.3) {
          v.coords[0] += (Math.random() - 0.5) * 0.02;
          v.coords[1] += (Math.random() - 0.5) * 0.02;
          v.speed = Math.max(0, v.speed + (Math.random() - 0.5) * 30);
          
          v.history.push({ speed: v.speed, ts: Date.now() });
          if (v.history.length > 50) v.history.shift();

          if (v.speed > 100) {
            setAlerts(prev => [...prev.slice(-9), { 
              type: 'Overspeed', 
              message: `${v.plate} → ${v.speed.toFixed(0)} km/h`, 
              time: Date.now() 
            }]);
            addToast({ type: 'danger', message: `${v.plate} OVERSPEED!` });
          }
          if (watchlist.some(w => w.plate === v.plate) && !v.detected) {
            addToast({ type: 'warning', message: `${v.plate} ON WATCHLIST!` });
            v.detected = true;
          }
        }
        return v;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating, user]);

  if (!user) {
    return <Login onLogin={(name) => setUser({ username: name || 'Operator' })} />;
  }

  const activeVehicles = vehicles.filter(v => v.status === 'active').length;

  return (
    <>
      <Header user={user} onLogout={() => setUser(null)} active={activeVehicles} />

      <div className="min-h-screen text-white">
        <main className="max-w-screen-2xl mx-auto p-8">
          <StatsGrid vehicles={vehicles} alerts={alerts} watchlist={watchlist} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Left Side - Map & List */}
            <div className="lg:col-span-2 space-y-8">
              <div className="dark-card p-6 rounded-3xl shadow-2xl">
                <MapPanel vehicles={vehicles} onSelectVehicle={setSelectedVehicle} />
              </div>
              <div className="dark-card p-6 rounded-3xl shadow-2xl">
                <VehicleList vehicles={vehicles} onSelect={setSelectedVehicle} />
              </div>
            </div>

            {/* Right Side - Panels */}
            <div className="space-y-8">
              <div className="dark-card p-6 rounded-3xl shadow-2xl"><AlertsPanel alerts={alerts} /></div>
              <div className="dark-card p-6 rounded-3xl shadow-2xl"><WatchlistPanel watchlist={watchlist} /></div>
              <div className="dark-card p-6 rounded-3xl shadow-2xl"><SpeedChart vehicles={vehicles} /></div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}

      {/* Toasts */}
      <div className="fixed top-6 right-6 space-y-3 z-50">
        {toasts.map(t => <Toast key={t.id} type={t.type} message={t.message} />)}
      </div>

      {/* Floating Pause/Resume Button */}
      <button
        onClick={() => setIsSimulating(!isSimulating)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white px-12 py-6 rounded-full shadow-2xl text-2xl font-bold z-50 animate-pulse ring-4 ring-pink-500 ring-opacity-60 transition-all"
      >
        {isSimulating ? '⏸ PAUSE' : '▶ RESUME'}
      </button>
    </>
  );
}

export default App;