import React from "react";
import "../styles/Header.css"
import pokemonLogo from '../pokemonLogo.png'; // Make sure this path is correct


const Header = () => {
  const imageUrl = {pokemonLogo}  
  return ( 
  
  <div className="header-with-gradient-line">
    <header  
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "14vh",
        background: `url(${imageUrl}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    ></header>

  </div>
)
}
export default Header
