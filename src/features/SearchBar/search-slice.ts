import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Search {
  identifier: string;
  timestamp?: string;
}

export interface SearchState {
  history: Search[];
  identifier: string;
}

// https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript
const initialState: { history: Search[], identifier: string } = {
  history: [],
  identifier: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchIdentifier: (state, action: PayloadAction<string>) => {
      state.identifier = action.payload;
    },
    addSearchHistory: (state, action: PayloadAction<Search>) => {
      state.history = [action.payload, ...state.history];
    }
  }
});

export const { setSearchIdentifier, addSearchHistory } = searchSlice.actions;
