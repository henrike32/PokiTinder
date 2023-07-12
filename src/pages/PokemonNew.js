import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const PokemonNew = ({ createPokemon }) => {
  const navigate = useNavigate()
  const [ newPokemon, setNewPokemon ] = useState( {

    name: "",
    species: "",
    size: "",
    sound: "",
    image: "",
    pokemon_type: ""

  } )

  const handleChange = ( e ) => {
    setNewPokemon( { ...newPokemon, [ e.target.name ]: e.target.value } )
  }
  
  const handleSubmit = () => {
    createPokemon( newPokemon )
    navigate( "/pokemonindex" )
  }

    return(
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
              value={ newPokemon.name }  
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
              value={ newPokemon.size }   
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
              value={ newPokemon.species }    
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
              value={ newPokemon.sound }   
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
              value={ newPokemon.pokemon_type } 
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
              value={ newPokemon.image } 
            />
          </FormGroup>
          <Button onClick={ handleSubmit } name="submit">
            Submit
          </Button>
        </Form>
      </>
    )
}

export default PokemonNew