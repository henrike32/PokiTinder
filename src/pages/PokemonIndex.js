import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

const PokemonIndex = ({ pokemons }) => {
  console.log(pokemons);

  const containerStyle = {
    backgroundImage: "url('https://images3.alphacoders.com/126/1260271.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "2rem",
  };

  return (
    <main style={containerStyle}>
      <Container>
        <Row>
          {pokemons?.map((pokemon, index) => {
            return (
              <Col xs={6} sm={4} md={3} lg={2} xl={2} key={index}>
                <Card
                  body
                  className="text-center"
                  color="warning"
                  style={{
                    width: "100%",
                  }}
                >
                  <img alt={`profile of a pokemon named ${pokemon.name}`} src={pokemon.image} />
                  <CardBody>
                    <CardTitle tag="h5">{pokemon.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Species: {pokemon.species}
                      <br />
                      Size: {pokemon.size}
                      <br />
                      PokemonType: {pokemon.pokemon_type}
                    </CardSubtitle>
                    <Button color="danger" outline>
                      <NavLink to={`/pokemonshow/${pokemon.id}`}>
                        Click to view
                      </NavLink>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default PokemonIndex;
