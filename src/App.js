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

import "./App.css"

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    readPokemon()
  }, [])

  const readPokemon = () => {
    fetch("https://poki-tinder.vercel.app/pokemonIndex")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((payload) => {
        setPokemons(payload);
      })
      .catch((error) => {
        console.error("Error fetching pokemons:", error);
      });
  }
  
  const createPokemon = (pokemon) => {
    fetch("https://poki-tinder.vercel.app/pokemons", {
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
    fetch(`https://poki-tinder.vercel.app/pokemons/${id}`, {
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => {
      // Update the pokemons state with the updated payload
      setPokemons((prevPokemons) => {
        const updatedPokemons = prevPokemons.map((p) => {
          if (p.id === payload.id) {
            return payload;
          }
          return p;
        });
        return updatedPokemons;
      });
    })
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