export default function Toast({ type, message }) {
  const colors = { danger: 'bg-red-600', warning: 'bg-orange-600', info: 'bg-blue-600' };
  return <div className={`${colors[type] || 'bg-gray-800'} text-white px-8 py-4 rounded-xl shadow-2xl text-xl`}>{message}</div>;
}