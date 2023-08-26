import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeSquare from './';
import { OFFICIAL_ARTWORK_URL } from '../../constants/general';

test('renders PokeSquare with correct name and image based on url', () => {
  render(
    <PokeSquare
      url='https://pokeapi.co/api/v2/pokemon/1/'
      name='bulbasaur'
    />
  );

  expect(screen.getByTestId('PokeSquare-name')).toHaveTextContent(/Bulbasaur/i);
  expect(screen.getByTestId('PokeSquare-img')).toHaveAttribute('src', `${OFFICIAL_ARTWORK_URL}/1.png`);
});

test('renders PokeSquare with correct name and image based on imageUrl', () => {
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  render(
    <PokeSquare
      imageUrl={imageUrl}
      name='charmander'
    />
  );

  expect(screen.getByTestId('PokeSquare-name')).toHaveTextContent(/Charmander/i);
  expect(screen.getByTestId('PokeSquare-img')).toHaveAttribute('src', imageUrl);
});
