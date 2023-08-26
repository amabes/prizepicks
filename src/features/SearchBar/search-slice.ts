import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Search {
  name: string; // "bulbasaur"
  id: number;
  imageUrl?: string;
  currentIdentifier?: string;
}

export interface SearchState {
  searches: Search[];
  identifier: string;
}

const initialState = {
  searches: [],
  identifier: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchIdentifier: (state, action: PayloadAction<string>) => {
      state.identifier = action.payload;
    }
  }
});

export const { setSearchIdentifier } = searchSlice.actions;
