import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const PokemonEdit = ({ pokemons, updatePokemon }) => {
  const { id } = useParams()
  let currentPokemon = pokemons?.find( ( pokemon ) => pokemon.id === +id )

  const [ editPokemon, setEditPokemon ] = useState( {
    name: currentPokemon.name,
    size: currentPokemon.size,
    species: currentPokemon.species,
    sound: currentPokemon.sound,
    pokemon_type: currentPokemon.pokemon_type,
    image: currentPokemon.image
  } )

  const handleChange = ( e ) => {
    setEditPokemon( { ...editPokemon, [ e.target.name ]: e.target.value } )
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updatePokemon( editPokemon, currentPokemon.id )
    navigate( `/pokemonshow/${ currentPokemon.id}`)
  }

  return (
    <>
      <Form>

        <FormGroup>
          <Label for="poke-name">
            Name
          </Label>
          <Input
            id="poke-name"
            name="name"
            type="text"
            onChange={ handleChange }
            value={ editPokemon.name }
          />
        </FormGroup>

        <FormGroup>
          <Label for="poke-size">
            Size
          </Label>
          <Input
            id="poke-size"
            name="size"
            type="decimal"
            onChange={ handleChange }
            value={ editPokemon.size }
          />
        </FormGroup>

        <FormGroup>
          <Label for="poke-species">
            Species
          </Label>
          <Input
            id="poke-species"
            type="text"
            name="species"
            onChange={ handleChange }
            value={ editPokemon.species }
          />
        </FormGroup >

        <FormGroup>
          <Label for="poke-sound" >
            Sound
          </Label>
          <Input
            id="poke-sound"
            name="sound"
            type="text"
            onChange={ handleChange }
            value={ editPokemon.sound }
          />
        </FormGroup >

        <FormGroup>
          <Label for="poke-pokemon_type">
            Poke Type
          </Label>
          <Input
            id="poke-pokemon_type"
            name="pokemon_type"
            type="text"
            onChange={ handleChange }
            value={ editPokemon.pokemon_type }
          />
        </FormGroup >

        <FormGroup>
          <Label for="poke-image">
            Image
          </Label>
          <Input
            id="poke-image"
            name="image"
            type="url"
            placeholder="Image URL"
            onChange={ handleChange }
            value={ editPokemon.image }
          />
        </FormGroup>
        <Button onClick={ handleSubmit } name="submit">
          Submit Updated Cat
        </Button>
      </Form>
    </>
  )
}

export default PokemonEdit