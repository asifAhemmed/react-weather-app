import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { selectedLocation } = useContext(LocationContext);
  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setLoading({
        state: true,
        message: "Loading fetching weather data...",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const message = `Error ${response.status}: ${response.statusText}`;
        throw new Error(message);
      }
      const data = await response.json();
      console.log(data);
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding your location...",
    });
    if (selectedLocation.longitude && selectedLocation.latitude) {
      fetchWeatherData(selectedLocation.longitude, selectedLocation.latitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        fetchWeatherData(longitude, latitude);
      });
    }
  }, [selectedLocation.longitude, selectedLocation.latitude]);

  return {
    weatherData,
    loading,
    error,
  };
};

export default useWeather;
