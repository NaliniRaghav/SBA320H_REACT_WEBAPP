

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
