import {createAction} from '@reduxjs/toolkit';
import { ActionType } from '../const';


export const changeCity = createAction(ActionType.CHANGE_CITY, (value) => ({
  payload: value,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (value) => ({
  payload: value,
}));
