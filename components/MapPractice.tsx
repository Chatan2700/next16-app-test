import React from "react";

type Weather = {
  id: number;
  city: string;
  temperature: number;
};

const weather = [
  { id: 1, city: "New York", temperature: 25 },
  { id: 2, city: "Los Angeles", temperature: 30 },
  { id: 3, city: "Chicago", temperature: 20 },
  { id: 4, city: "Houston", temperature: 28 },
  { id: 5, city: "Philadelphia", temperature: 22 },
];

const MapPractice = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Mapping Practice</p>

        <ul>
          {/* // Destructure the properties directly in the map function */}
          {weather.map(({ id, city, temperature }: Weather) => {
            return (
              <li key={id}>
                City: {city}, Temperature: {temperature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MapPractice;
