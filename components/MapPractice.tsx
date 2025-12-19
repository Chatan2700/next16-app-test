import React from "react";

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const MapPractice = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Mapping Practice</p>

        <ul>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapPractice;
