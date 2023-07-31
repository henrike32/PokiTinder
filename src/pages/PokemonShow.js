import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import "../styles/PokeShow.css";



const PokemonShow = ({ pokemons }) => {
  const { id } = useParams()
  let currentPokemon = pokemons?.find((pokemon) => pokemon.id === +id)
    return(
      <main className="show-page">
        <div className="card-show">
          {currentPokemon && (
            <Card 
              style={{
                width: '50rem'
              }}
            >
              <CardBody>
                <CardTitle >
                  {currentPokemon.name}
                </CardTitle>
              </CardBody>
              <img
                className="img-show"
                alt={`img of ${currentPokemon.name} who is a pokemon`}
                src={currentPokemon.image}
                width="100%"
              />
              <CardBody>
                <CardText>
                  Species: {currentPokemon.species}
                </CardText>

                <CardText>
                  Size: {currentPokemon.size}
                </CardText>
                
                <CardText>
                  Sound: {currentPokemon.sound}
                </CardText>

                <CardText>
                  Type: {currentPokemon.pokemon_type}
                </CardText>
                
              </CardBody>
                <NavLink to={ `/pokemonedit/${ currentPokemon.id }` } className="nav-link">
                  Edit Poke
                </NavLink>
            </Card>
            
          )}
        </div>
      </main>
    )
}
export default PokemonShow
   