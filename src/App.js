import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import PokemonIndex from "./pages/PokemonIndex"
import PokemonShow from "./pages/PokemonShow"
import PokemonNew from "./pages/PokemonNew"
import PokemonEdit from "./pages/PokemonEdit"


const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    readPokemon()
  }, [])

  const url = "https://fpoki-tinder.onrender.com"
  // const url = "https://localhost/3000"
 

  const readPokemon = () => {
    fetch(`${url}/pokemons`)
      .then(response => response.json())
      .then(payload => {
        setPokemons(payload)
      })
      .catch((error) => console.log(error))
  }
  
  const createPokemon = (pokemon) => {
    fetch(`${url}/pokemons`, {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readPokemon(payload))
      .catch((errors) => console.log("Pokemon create errors:", errors));
  }
  
  const updatePokemon = (pokemon, id) => {
    fetch(`${url}/pokemons/${id}`, {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => updatePokemon(payload))
      .catch((errors) => console.log("Pokemon update errors:", errors));
  }
  
  return(
    <>
      <Header />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons} />} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons}/>} />
        <Route path="/pokemonedit/:id" element={ <PokemonEdit pokemons={ pokemons } updatePokemon={updatePokemon}/>} />
        <Route path="/pokemonnew" element={ <PokemonNew createPokemon={createPokemon} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App