
import Page from "./Page"
import LocationProvider from "./provider/LocationProvider"
import { WeatherProvider, FavouriteProvider } from "./provider/index"

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
           <Page/> 
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  )
}

export default App
