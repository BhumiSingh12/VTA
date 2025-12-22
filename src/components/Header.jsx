export default function Header({ user, onLogout, active }) {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-4xl font-bold text-primary">V-TRACK Pro</h1>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">
            {active} Active Vehicles
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-700 text-lg">Welcome, <strong>{user?.username || 'Operator'}</strong></span>
          <button onClick={onLogout} className="text-red-600 hover:text-red-800 font-medium text-lg">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}