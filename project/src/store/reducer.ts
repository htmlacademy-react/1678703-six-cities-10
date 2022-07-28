import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, offersSorting, authorizedUser, selectOfferId, loadFavoritesOffers} from './action';
import {DEFAULT_CITY} from '../const';
import { offers } from '../mocks/offers';
import { SortingType } from '../const';


const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
  sorting: SortingType.Popular,
  isAuthorizedUser: false,
  selectedOfferId: -1,
  favoritesOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      // state.offers = action.payload;
    })
    .addCase(authorizedUser, (state, action) => {
      state.isAuthorizedUser = action.payload;
    })
    .addCase(selectOfferId, (state, action) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
    })
    .addCase(offersSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
