import LogoImg from "../assets/logo.svg";

export default function Logo() {
  return (
    <>
      <a href="./index.html">
        <img class="h-9" src={LogoImg} alt="Weather App" />
      </a>
    </>
  )
}
