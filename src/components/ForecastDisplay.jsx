

const ForecastDisplay = ({ weather, forecastType, selectedCity }) => {
  if (!weather) return <p>No weather data available for {selectedCity}</p>;

  return (
    <div>
      <h2>Weather Forecast for {selectedCity}</h2>

      {forecastType === 'current' && weather.current && (
        <div className="weather-card">
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Weather icon" />
        </div>
      )}

      {forecastType === 'hourly' && weather.forecast?.forecastday?.[0]?.hour && (
        <div className="weather-card">
          <h3>Hourly Forecast:</h3>
          {weather.forecast.forecastday[0].hour.map((hourData, index) => (
            <div key={index}>
              <p>Time: {new Date(hourData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <p>Temperature: {hourData.temp_c} °C</p>
              <p>Condition: {hourData.condition.text}</p>
              <img src={hourData.condition.icon} alt="Weather icon" />
            </div>
          ))}
        </div>
      )}

      {forecastType === 'forecast' && weather.forecast?.forecastday && (
        <div className="weather-card">
          <h3>10-Day Forecast:</h3>
          {weather.forecast.forecastday.map((day, index) => (
            <div key={index}>
              <p>Date: {day.date}</p>
              <p>Max Temp: {day.day.maxtemp_c} °C</p>
              <p>Min Temp: {day.day.mintemp_c} °C</p>
              <p>Condition: {day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt="Weather icon" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForecastDisplay;
