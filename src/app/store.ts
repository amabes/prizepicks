import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokeApi';
import { searchSlice } from '../features/SearchBar/search-slice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    // Expand on middleware under the hood to support better caching
    // Track cache lifetimes - if no other part of the app needs this data,
    // we can remove it after it expires
    return getDefaultMiddleware().concat(pokemonApi.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
