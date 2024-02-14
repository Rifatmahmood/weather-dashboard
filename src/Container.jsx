import { useContext, useEffect, useState } from "react"
import { weatherContext } from "./context"

import ClearSkyImg from "./assets/backgrounds/clear-sky.jpg"
import FewCloudsImg from "./assets/backgrounds/few-clouds.jpg"
import MistImg from "./assets/backgrounds/mist.jpeg"
import RainyDayImg from "./assets/backgrounds/rainy-day.jpg"
import ScatterdCloudsImg from "./assets/backgrounds/scattered-clouds.jpg"
import SnowImg from "./assets/backgrounds/snow.jpg"
import ThunderStormImg from "./assets/backgrounds/thunderstorm.jpg"
import WinterImg from "./assets/backgrounds/winter.jpg"

export default function Container({ children }) {
  const { weatherData } = useContext(weatherContext);
  const [climateImg, setClimateImg] = useState("");

  useEffect(() => {
    const bgImage = getBackgroundImg(weatherData.climate);
    setClimateImg(bgImage);
  }, [weatherData.climate]);

  function getBackgroundImg(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImg;
      case "Clouds":
        return FewCloudsImg;
      case "Clear":
        return ClearSkyImg;
      case "Snow":
        return SnowImg;
      case "Thunder":
        return ThunderStormImg;
      case "Fog":
        return WinterImg;
      case "Haze":
        return WinterImg;
      case "Mist":
        return MistImg;
    
      default:
        return ClearSkyImg;
    }
  }

  return (
    <div
      style={{background: `url('${climateImg}')`}}
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center">{children}</div>
  );
}
