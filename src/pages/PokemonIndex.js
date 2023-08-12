import React , {useState} from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/PokeIndex.css";


const PokemonIndex = ({ pokemons }) => {

  const [search, setSearch] = useState("")
  
  const filteredPokemons = pokemons.filter((pokemon) => {
    const searchableString = `${pokemon.name} ${pokemon.species} ${pokemon.pokemon_type}`.toLowerCase();
    return searchableString.includes(search.toLowerCase())
  });

  return (
      <Container className="index-page">
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pokemons"
            className="search-input"
          />
        </div>
        <div className="cardGrid-index">
          {filteredPokemons.slice(0, 10).map((pokemon, index) => {
            return (
              <Card className="card-container-index" key={index} >
                <img className="card-img-index" alt={`profile of a pokemon named ${pokemon.name}`} src={pokemon.image} />
                <CardBody className="card-body-index">
                  <CardTitle className="card-title-index" tag="h5">{pokemon.name}</CardTitle>
                  <CardSubtitle className="card-subtitle-index" tag="h6">
                    Name: {pokemon.name}
                    <br />
                    Species: {pokemon.species}
                    <br />
                    Type: {pokemon.pokemon_type}
                    <br />    
                  </CardSubtitle>
                    <div className="click-btn-container" tag="h6">
                  <NavLink className="click-btn" to={`/pokemonshow/${pokemon.id}`}>
                      View
                  </NavLink>                  
                    </div>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </Container>
  )
}


  export default PokemonIndex;