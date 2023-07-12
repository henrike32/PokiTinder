import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import PokemonNew from '../pages/PokemonNew';

describe( '<PokemonNew />', () =>
{
  beforeEach( () =>
  {
    render(
      <BrowserRouter>
        <PokemonNew />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()

  } )
  it( "renders the PokemonNew page", () =>
  {
    const element = screen.getByText(/size/i)
    expect(element).toBeInTheDocument()
  } )

} )