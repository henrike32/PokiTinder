import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PokemonIndex from "./pages/PokemonIndex"
import PokemonShow from "./pages/PokemonShow"
import PokemonNew from "./pages/PokemonNew"
import PokemonEdit from "./pages/PokemonEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    readPokemon()
  }, [])

  const readPokemon = () => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => response.json())
      .then((payload) => {
        setPokemons(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPokemon = (pokemon) => {
    fetch("http://localhost:3000/pokemons", {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readPokemon(payload))
      .catch((errors) => console.log("Pokemon create errors:", errors))
  }

  const updatePokemon= (pokemon, id) => {
    fetch(`http://localhost:3000/pokemons/${id}`, {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => updatePokemon(payload))
    .catch((errors) => console.log("Pokemon create errors:", errors))
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