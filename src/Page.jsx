import { useContext } from "react"
import Container from "./Container"
import Header from "./Header/Header"
import Weather from "./Weather/Weather"
import { weatherContext } from "./context"

export default function Page() {
  const { loading } = useContext(weatherContext)

  return (
    <Container>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <>
          <Header />
          <Weather />
        </>
      )}
    </Container>
  )
}
