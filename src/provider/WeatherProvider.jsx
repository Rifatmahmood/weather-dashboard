import { weatherContext } from "../context";
import { useWeather } from "../hooks";



export default function WeatherProvider({ children }) {
  
  const { weatherData, error, loading } = useWeather()

  return (
    <weatherContext.Provider value={{weatherData, error, loading}}>
      {children}
    </weatherContext.Provider>
  )
}
