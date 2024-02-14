import { useState } from "react"
import { locationContext } from "../context"

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "", 
    latitude: 0, 
    longitude: 0, 
  })
  return (
    <locationContext.Provider value={{selectedLocation, setSelectedLocation}}>
      {children}
    </locationContext.Provider>
  )
}


