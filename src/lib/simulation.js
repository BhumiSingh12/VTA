export const indianCities = [
  { name: 'Delhi', coords: [28.6139, 77.2090] },
  { name: 'Mumbai', coords: [19.0760, 72.8777] },
  { name: 'Bangalore', coords: [12.9716, 77.5946] },
  { name: 'Chennai', coords: [13.0827, 80.2707] },
  { name: 'Kolkata', coords: [22.5726, 88.3639] },
  { name: 'Hyderabad', coords: [17.3850, 78.4867] },
  { name: 'Pune', coords: [18.5204, 73.8567] },
  { name: 'Ahmedabad', coords: [23.0225, 72.5714] },
];

export const generateVehicles = () => {
  const plates = ['DL1CA1234', 'MH02XY5678', 'KA03AB9012', 'TN07BB3456', 'UP32CD7890', 'WB20EF1111'];
  return plates.map((plate, i) => ({
    id: `veh_${i}`,
    plate,
    owner: ['Amit Sharma', 'Priya Singh', 'Raj Kumar', 'Neha Gupta', 'Vikram Patel', 'Sonia Mehta'][i],
    coords: indianCities[i % indianCities.length].coords.slice(),
    speed: 50 + Math.random() * 60,
    status: Math.random() > 0.3 ? 'active' : 'idle',
    history: [],
    detected: false
  }));
};

export const watchlist = [
  { plate: 'MH02XY5678', reason: 'Stolen', level: 'Critical' },
  { plate: 'UP32CD7890', reason: 'Speeding', level: 'High' }
];