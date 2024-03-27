// Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import "../CSS/module.Map.css"

const getDistance = (coord1, coord2) => {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;
  const rad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Earth's radius in km
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const Map = ({ customerLocation }) => {
  const [deliveryPersonLocation, setDeliveryPersonLocation] = useState([21.1602, 72.8311]); // Initial location set to approximately 1 km away from Surat, Gujarat, India
  const [orderDelivered, setOrderDelivered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate the delivery person gradually moving towards the customer
      const [targetLat, targetLon] = customerLocation;
      const [currentLat, currentLon] = deliveryPersonLocation;

      const newLat = currentLat + (targetLat - currentLat) * 0.1;
      const newLon = currentLon + (targetLon - currentLon) * 0.1;

      setDeliveryPersonLocation([newLat, newLon]);

      // Check if the delivery person has reached the customer's location and the order is not delivered yet
      const distance = getDistance(deliveryPersonLocation, customerLocation);
      if (distance < 0.01 && !orderDelivered) {
        // Trigger an alert when the delivery person arrives
        window.alert('Your order has been delivered!');
        setOrderDelivered(true);
        clearInterval(interval);
      }
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [customerLocation, deliveryPersonLocation, orderDelivered]);

  const mapRef = React.useRef(null);

  useEffect(() => {
    // Initialize leaflet-routing-machine when the mapRef is available
    if (mapRef.current) {
      const routingMachine = L.Routing.control({
        waypoints: [
          L.latLng(deliveryPersonLocation),
          L.latLng(customerLocation),
        ],
      }).addTo(mapRef.current.leafletElement);

      return () => {
        // Cleanup routing machine when the component unmounts
        mapRef.current.leafletElement.removeControl(routingMachine);
      };
    }
  }, [customerLocation, deliveryPersonLocation]);

  return (
    <center>
          <MapContainer
    className="MapContainer"
      center={customerLocation}
      zoom={13}
      style={{ width: '80%', height: '500px'}}
      whenCreated={(map) => (mapRef.current = map)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Customer Marker */}
      <Marker position={customerLocation}>
        <Popup>
          Customer's Location: <br />
          Latitude: {customerLocation[0].toFixed(6)} <br />
          Longitude: {customerLocation[1].toFixed(6)}
        </Popup>
      </Marker>

      {/* Delivery Person Marker */}
      <Marker position={deliveryPersonLocation}>
        <Popup>
          Delivery Person's Location: <br />
          Latitude: {deliveryPersonLocation[0].toFixed(6)} <br />
          Longitude: {deliveryPersonLocation[1].toFixed(6)}
        </Popup>
      </Marker>
    </MapContainer>
    </center>
  );
};

export default Map;
