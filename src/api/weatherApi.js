import axios from 'axios';

const API_KEY = '81a703cb6bfd422b8c230733243009';
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export const getWeather = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: { q: city, key: API_KEY },
  });
  return response.data;
};
