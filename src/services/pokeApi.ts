import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonResult {
  name: string; // "bulbasaur"
  url: string // "https://pokeapi.co/api/v2/pokemon/1/"
};

export interface Pokemons {
  results: PokemonResult[]
};
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: false;
  slot: 1;
};

export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
  slot: 1;
};

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
}

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2'
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query<Pokemons, number>({
        query(limit = 10) {
          return `/pokemon/?limit=${limit}`
        }
      }),
      fetchPokemon: builder.query<Pokemon, number | string>({
        query(identifier = '') {
          return `/pokemon/${identifier}` // name or id
        }
      })
    }
  }
})

// Export auto-generated react hooks

export const { useFetchPokemonQuery, useFetchPokemonsQuery } = pokemonApi;