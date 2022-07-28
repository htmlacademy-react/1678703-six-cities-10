import {createAction} from '@reduxjs/toolkit';
import { ActionType } from '../const';


export const changeCity = createAction(ActionType.CHANGE_CITY, (value) => ({
  payload: value,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (value) => ({
  payload: value,
}));

export const offersSorting = createAction(ActionType.OFFERS_SORTING, (value) => ({
  payload: value,
}));

export const authorizedUser = createAction(ActionType.AUTHORIZED_USER, (value) => ({
  payload: value,
}));

export const selectOfferId = createAction(ActionType.SELECT_OFFER_ID, (value) => ({
  payload: value,
}));

export const loadFavoritesOffers = createAction(ActionType.LOAD_FAVORITES_OFFERS, (value) => ({
  payload: value,
}));
