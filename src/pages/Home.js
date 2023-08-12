import React from "react"
import "../styles/PokeHome.css"
import pokiHome from "../assets/pokiHome.png"
import { Card, CardBody, CardTitle, CardSubtitle, Container } from "reactstrap"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-page">
      <Card className="card-container-home">
        <img className="card-img-home" alt="pokeHomeCard" src={pokiHome} />
        <CardBody className="card-body-home">
          <CardTitle className="card-title-home" tag="h5">
            PokiTinder!!
          </CardTitle>
          <CardSubtitle className="card-subtitle-home" tag="h6">
            A place to see some cool info about Pokes!!! Feel free to browse!
            <br />
            <br />
          </CardSubtitle>
          <div className="click-btn-container-home" tag="h6">
            <NavLink className="click-btn-home" to={`/pokemonindex`}>
              View Pokes
            </NavLink>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home
