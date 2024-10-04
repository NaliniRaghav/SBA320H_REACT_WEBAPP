
// import React, { useEffect, useState } from 'react';
// import ForecastDisplay from './ForecastDisplay';

// const WeatherCard = ({ weatherData, setWeatherData, selectedCity, forecastType }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (selectedCity) {
//       fetchWeatherData(selectedCity, forecastType);
//     }
//   }, [selectedCity, forecastType]);

//   const fetchWeatherData = async (city, forecastType) => {
//     setLoading(true);
//     setError(null);
//     try {
//       let apiUrl = '';
//       if (forecastType === 'current') {
//         apiUrl = `http://api.weatherapi.com/v1/current.json?key=81a703cb6bfd422b8c230733243009&q=${city}`;
//       } else if (forecastType === 'hourly') {
//         apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=81a703cb6bfd422b8c230733243009&q=${city}&days=1`;
//       } else if (forecastType === 'forecast') {
//         apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=81a703cb6bfd422b8c230733243009&q=${city}&days=10`;
//       }

//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error(`Error fetching weather data: ${response.statusText}`);
//       }

//       const data = await response.json();
//       setWeatherData(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="weather-container">
//       {weatherData && (
//         <ForecastDisplay weather={weatherData} forecastType={forecastType} />
//       )}
//     </div>
//   );
// };

// export default WeatherCard;
import React, { useEffect, useState } from 'react';
import ForecastDisplay from './ForecastDisplay';

// const WeatherCard = ({ weatherData, fetchWeatherData, selectedCity, forecastType }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (selectedCity) {
//       fetchWeatherData(selectedCity, forecastType);
//     }
//   }, [selectedCity, forecastType, fetchWeatherData]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="weather-container">
//       {weatherData && (
//         <ForecastDisplay weather={weatherData} forecastType={forecastType} />
//       )}
//     </div>
//   );
// };

// export default WeatherCard;
// import React, { useEffect, useState } from 'react';
// import ForecastDisplay from './ForecastDisplay';

const WeatherCard = ({ weatherData, fetchWeatherData, selectedCity, forecastType }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity, forecastType);
    }
  }, [selectedCity, forecastType, fetchWeatherData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-container">
      {/* {selectedCity} */}
      {weatherData && (
        <ForecastDisplay
          weather={weatherData}
          forecastType={forecastType}
          selectedCity={selectedCity}
        />
      )}
    </div>
  );
};

export default WeatherCard;
