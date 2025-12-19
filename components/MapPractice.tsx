import { useState } from "react";
import { Weather } from "@/lib/types";

const weather: Weather[] = [
  { id: 1, city: "New York", temperature: 26 },
  { id: 2, city: "Los Angeles", temperature: 30 },
  { id: 3, city: "Chicago", temperature: 20 },
  { id: 4, city: "Houston", temperature: 28 },
  { id: 5, city: "Philadelphia", temperature: 22 },
];

const MapPractice = () => {
  // const hotCities = weather.filter((item) => item.temperature > 35);

  const [cities, setCities] = useState(weather);

  const handleAddCity = () => {
    console.log("Add City");
    const newCity = { id: Date.now(), city: "Miami", temperature: 25 };
    setCities([...cities, newCity]);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="mt-4">Mapping Practice</p>

        {/* {hotCities.length === 0 && <p>No hot cities found.</p>} */}

        <button
          className="px-4 py-2 rounded-lg font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-colors hover:bg-zinc-400 active:scale-95 shadow-sm ring-offset-2 flex gap-1 items-center justify-center"
          onClick={handleAddCity}
        >
          Add City
        </button>

        <ul>
          {/* // Destructure the properties directly in the map function */}
          {cities.map(({ id, city, temperature }) => {
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
