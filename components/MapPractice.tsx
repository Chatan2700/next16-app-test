import React from "react";
import { Weather } from "@/lib/types";

const weather: Weather[] = [
  { id: 1, city: "New York", temperature: 26 },
  { id: 2, city: "Los Angeles", temperature: 30 },
  { id: 3, city: "Chicago", temperature: 20 },
  { id: 4, city: "Houston", temperature: 28 },
  { id: 5, city: "Philadelphia", temperature: 22 },
];

const MapPractice = () => {
  const hotCities = weather.filter((item) => item.temperature > 35);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Mapping Practice</p>

        {hotCities.length === 0 && <p>No hot cities found.</p>}

        <ul>
          {/* // Destructure the properties directly in the map function */}
          {hotCities.map(({ id, city, temperature }) => {
            return (
              // Add classname based on a contion
              <li key={id} className={temperature > 25 ? "text-red-500" : "text-blue-500"}>
                {/* Render the UI conditionally as well  */}
                City: {city}, Temperature: {temperature} °C {temperature > 25 ? "☀️" : "❄️"}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MapPractice;
