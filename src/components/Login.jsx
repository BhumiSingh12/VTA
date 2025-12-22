export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">V-TRACK Pro</h1>
        <p className="text-gray-600 mb-8 text-lg">Advanced Vehicle Tracking System</p>
        <button
          onClick={() => onLogin("Operator")}
          className="bg-primary hover:bg-purple-700 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-lg transition"
        >
          Login to Dashboard
        </button>
      </div>
    </div>
  );
}