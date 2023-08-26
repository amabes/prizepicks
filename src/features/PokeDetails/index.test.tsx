import React from 'react';
import { render, screen } from '@testing-library/react';
import PokeDetails from './';
import { OFFICIAL_ARTWORK_URL } from '../../constants/general';
import { PokemonAbility, PokemonType } from '../../services/pokeApi';
import formatHeight from '../../utilities/formatHeight';
import formatWeight from '../../utilities/formatWeight';
import formatString from '../../utilities/formatString';

const charmanderResponse = {
  "abilities": [
    {
      "ability": {
        "name": "blaze",
        "url": "https://pokeapi.co/api/v2/ability/66/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "solar-power",
        "url": "https://pokeapi.co/api/v2/ability/94/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    "back_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
    "back_shiny_female": null,
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "front_female": null,
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    "front_shiny_female": null,
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
        "front_female": null
      },
      "home": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png",
        "front_shiny_female": null
      },
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png"
      }
    },
  },
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ],
  "weight": 85
};

test('renders PokeDetails with correct name and image based on imageUrl', () => {
  render(
    <PokeDetails
      name={charmanderResponse.name}
      height={charmanderResponse.height}
      weight={charmanderResponse.weight}
      abilities={charmanderResponse.abilities as PokemonAbility[]}
      types={charmanderResponse.types as PokemonType[]}
    />
  );
  const name = screen.getByTestId('PokeDetails-name');
  const height = screen.getByTestId('PokeDetails-height');
  const weight = screen.getByTestId('PokeDetails-weight');
  const ability0 = screen.getByTestId('PokeDetails-ability-0');
  const ability1 = screen.getByTestId('PokeDetails-ability-1');

  expect(name).toHaveTextContent(charmanderResponse?.name);
  expect(height).toHaveTextContent(formatHeight(charmanderResponse?.height));
  expect(weight).toHaveTextContent(formatWeight(charmanderResponse?.weight));
  expect(ability0).toHaveTextContent('blaze');
  expect(ability1).toHaveTextContent('solar power');
});
