import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

export default function SpeedChart({ vehicles }) {
  const data = {
    labels: ['10s', '8s', '6s', '4s', '2s', 'Now'],
    datasets: vehicles.slice(0,3).map((v,i) => ({
      label: v.plate,
      data: [60, 70, 85, 95, 110, v.speed],
      borderColor: ['#667eea','#f093fb','#f5576c'][i],
      tension: 0.4
    }))
  };
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6">
      <h2 className="text-3xl font-bold mb-4">Speed Trends</h2>
      <Line data={data} options={{responsive:true}} />
    </div>
  );
}