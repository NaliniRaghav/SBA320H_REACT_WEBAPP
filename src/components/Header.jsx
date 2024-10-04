
import  { useState } from 'react';
import "../styles/Header.css";  // Verify the path

const Header = ({ setSelectedCity, fetchWeatherData }) => {
  const [city, setCity] = useState('');  // Manage typed city input

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      setSelectedCity(city);
      await fetchWeatherData(city);  // Fetch weather data for typed city
    } else {
      alert('Please enter a city name');
    }
  };

  return (
    <header className="header">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}  
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
