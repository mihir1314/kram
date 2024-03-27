// DeliverySystem.js
import React, { useState, useEffect } from "react";
import Map from "./Map";

const DeliverySystem = () => {
  const [customerLocation, setCustomerLocation] = useState(null);
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);

  useEffect(() => {
    const askForLocationPermission = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCustomerLocation([latitude, longitude]);
          setLocationPermissionGranted(true);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Error getting location. Please make sure location services are enabled."
          );
        }
      );
    };

    if (!locationPermissionGranted) {
      askForLocationPermission();
    }
  }, [locationPermissionGranted]);

  return (
    <div>
      <div className="container px-4 py-5">
        <h2
          className="pb-2 mb-2 border-bottom mx-6 mx-lg-2"
          style={{ color: "white" }}
        >
          Delivery System
        </h2>
      </div>
      {/* You can add UI components here to display the status or details */}
      {customerLocation && <Map customerLocation={customerLocation} />}
    </div>
  );
};

export default DeliverySystem;
