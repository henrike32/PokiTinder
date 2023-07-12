import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"


const PokemonShow = ({ pokemons }) => {
  const { id } = useParams()
  let currentPokemon = pokemons?.find((pokemon) => pokemon.id === +id)
  console.log(currentPokemon)

    return(
      <main className="card" data-testid='pokemonshow'>
      {currentPokemon && (
        <Card
          style={{
            width: '18rem'
          }}
        >
          <CardBody>
            <CardTitle tag="h5">
              {currentPokemon.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Size {currentPokemon.size}
            </CardSubtitle>
          </CardBody>
          <img
            alt={`img of ${currentPokemon.name} who is a pokemon`}
            src={currentPokemon.image}
            width="100%"
          />
          <CardBody>
            <CardText>
              Type {currentPokemon.pokemon_type}
            </CardText>
          </CardBody>
            <NavLink to={ `/pokemonedit/${ currentPokemon.id }` } className="nav-link">
              Edit Poke Profile
            </NavLink>
        </Card>
        
      )}
    </main>
    )
}
export default PokemonShow
   