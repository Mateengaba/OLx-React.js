import React from "react"
import Banners from "./Compnents/Banners"
import Search from "./Compnents/Search"
import Mynavbar from "./Compnents/Mynavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Compnents/Slider";
import Rondbox from "./Compnents/Rondbox";
import Prodects from "./Compnents/Prodects";
import Fotter from "./Compnents/Fotter";




function App() {

  return (
    <>
      <Banners />
      <Search />
      <Mynavbar />
      <Slider />

      <Rondbox />
      <Prodects />
      <Fotter />
    </>
  )
}

export default App
