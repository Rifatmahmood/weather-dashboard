import { useState } from "react"
import Container from "./Container"
import Favourite from "./Favourite"
import FavouriteListMoadal from "./FavouriteListMoadal"
import Logo from "./Logo"
import Search from "./Search"

export default function Header() {
  const [showFavModal, seTShowFavModal] = useState()
  return (
    <>
      <Container>
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={()=> seTShowFavModal(!showFavModal) } />
          {showFavModal && <FavouriteListMoadal />}
        </div>
      </Container>
    </>
  )
}
