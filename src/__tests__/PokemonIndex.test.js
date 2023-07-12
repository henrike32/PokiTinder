import { render, screen } from "@testing-library/react"
import PokemonIndex from "../pages/PokemonIndex"
import mockPokemons from "../mockPokemons"

describe("<PokemonIndex />", () => {
    it("renders without crashing", () => {})
    it("renders pokemon cards", () => {
      const div = document.createElement("div")
      render(<PokemonIndex pokemons={mockPokemons} />, div)
      mockPokemons.forEach((pokemon) => {
        const pokemonName = screen.getByText(pokemon.name)
        expect(pokemonName).toBeInTheDocument()
      })
    })
  })