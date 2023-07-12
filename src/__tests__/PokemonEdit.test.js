import { render } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import PokemonEdit from "../pages/PokemonEdit"
import mockPokemons from "../mockPokemons"

describe( "<PokemonEdit />", () =>
{

  it( 'renders without crash', () =>
  {
    render(
      <MemoryRouter initialEntries={ [ "/pokemonEdit/1" ] }>
        <Routes>
          <Route path="/pokemonEdit/:id" element={ <PokemonEdit pokemons={mockPokemons } /> } />
        </Routes>
      </MemoryRouter>
    )
  } )
} )