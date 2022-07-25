import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, offersSorting} from './action';
import {DEFAULT_CITY} from '../const';
import { offers } from '../mocks/offers';
import { SortingType } from '../const';


const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
  sorting: SortingType.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      // state.offers = action.payload;
    })
    .addCase(offersSorting, (state, action) => {
      state.sorting = action.payload;
      // eslint-disable-next-line no-console
      // console.log('333', action.payload);
    });
});
