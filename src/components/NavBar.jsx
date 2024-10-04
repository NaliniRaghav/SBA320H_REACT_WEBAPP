
import  { useState } from 'react';

const NavBar = ({ setForecastType, setSelectedCity, fetchWeatherData }) => {
  const [city, setCity] = useState('');
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Indianapolis"
  ];

   
  const handleCitySelect = async (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setSelectedCity(selectedCity);
    fetchWeatherData(selectedCity);
  };

  return (
    <nav>
      <div className="menu-bar">
        <button onClick={() => setForecastType('current')} className="menu-button">Today</button>
        <button onClick={() => setForecastType('hourly')} className="menu-button">Hourly</button>
        <button onClick={() => setForecastType('forecast')} className="menu-button">10 Day</button>
      </div>

      <select value={city} onChange={handleCitySelect}>
        <option value="" disabled>Select a city</option>
        {cities.map((cityOption, index) => (
          <option key={index} value={cityOption}>
            {cityOption}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default NavBar;
