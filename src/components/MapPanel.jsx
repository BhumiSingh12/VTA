import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'});

export default function MapPanel({ vehicles, onSelectVehicle }) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl h-96">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{height: '100%', width: '100%'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {vehicles.map(v => (
          <Marker key={v.id} position={v.coords} eventHandlers={{click: () => onSelectVehicle(v)}}>
            <Popup>{v.plate}<br />{v.speed.toFixed(0)} km/h</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}