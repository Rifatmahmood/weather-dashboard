import { favouriteContext } from "../context"
import { useLocalStorage } from "../hooks"

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", [])

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude: latitude, longitude: longitude, location: location }])
  }

  const removeFromFavourites = (loc) => {
    const restFavourites = favourites.filter((fav) => fav.location !== loc)

    setFavourites(restFavourites)
  }

  return (
    <favouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>{children}</favouriteContext.Provider>
  )
}
