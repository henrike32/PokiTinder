import React from "react";
import "../styles/Header.css";
import pokemonLogo from '../assets/pokemonLogo.png';
import headerPoke from '../assets/headerPoke.jpeg';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-with-gradient-line">
        <header className="App-header">
          <div className="header-logo">
            <NavLink to={'/pokemonIndex'}>
              <img src={pokemonLogo} alt="Pokemon Logo" />
            </ NavLink>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
