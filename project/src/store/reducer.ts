import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, offersSorting, requireAuthorization, selectOfferId, loadFavoritesOffers, setError} from './action';
import {DEFAULT_CITY} from '../const';
import { offers } from '../mocks/offers';
import { SortingType, AuthorizationStatus } from '../const';


const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
  sorting: SortingType.Popular,
  authorizationStatus: {
    status: AuthorizationStatus.Unknown,
    email: '',
  },
  selectedOfferId: -1,
  favoritesOffers: [],
  error: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(selectOfferId, (state, action) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(offersSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
