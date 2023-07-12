import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("renders a logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "pokemonLogo.png")
    expect(logo).toHaveAttribute("alt", "Pokemon logo")
  })
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

