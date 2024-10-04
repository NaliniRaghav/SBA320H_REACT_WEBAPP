import  { useState } from 'react';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [forecastType, setForecastType] = useState('current');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city, forecastType = 'current') => {
    try {
      let apiUrl = '';
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;  

      if (forecastType === 'current') {
        apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      } else if (forecastType === 'hourly') {
        apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;
      } else if (forecastType === 'forecast') {
        apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error fetching weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h2>Weather Forecast</h2>
      <Header setSelectedCity={setSelectedCity} fetchWeatherData={fetchWeatherData} />
      <NavBar
        setForecastType={setForecastType}
        setSelectedCity={setSelectedCity}
        fetchWeatherData={fetchWeatherData}
      />
      <WeatherCard
        weatherData={weatherData}
        fetchWeatherData={fetchWeatherData}
        selectedCity={selectedCity}
        forecastType={forecastType}
      />
    </div>
  );
};

export default App;
