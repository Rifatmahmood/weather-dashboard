import { useEffect, useState, useContext } from "react"
import { locationContext } from "../context"

// it's for personal preference, you customize your data througn this blueprint;

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
  })

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  })

  const [error, setError] = useState(null)

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data",
      })

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=abdd447241caf0ab8c4030111dfc0925&units=metric`)

      if (!response.ok) {
        const errorMsg = `Fetching Weather Data Failed: ${response.status}`
        throw new Error(errorMsg)
      }

      const data = await response.json()
      const updateWeatherData = {
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
      }

      setWeatherData(updateWeatherData)
    } catch (error) {
      setError(error)
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      })
    }
  }

  const {selectedLocation} = useContext(locationContext); 

  useEffect(() => {
    setLoading({
      state: false,
      message: "Finding Location...",
    })

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude)
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        fetchWeatherData(lat, lon)
      })
    }
  }, [selectedLocation.latitude, selectedLocation.longitude])

  return {
    weatherData,
    error,
    loading,
  }
}

export default useWeather
