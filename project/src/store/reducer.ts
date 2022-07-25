import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import {DEFAULT_CITY} from '../const';
import { offers } from '../mocks/offers';


const initialState = {
  offers: offers,
  city: DEFAULT_CITY,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {

      // eslint-disable-next-line no-console
      // console.log('333', action.payload);
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      // state.offers = action.payload;
    });
});
