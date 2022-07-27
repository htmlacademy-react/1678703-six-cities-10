import {Cities} from './types/city';
import { HousingType } from './types/offer';

export enum AppRoute {
  Main = '/',
  OfferId = '/offer/:id',
  Offer = '/offer/',
  Favorites = '/favorites',
  Login = '/login',
  NotFoundPage = '/not_found'
}

export const Housing: HousingType = {
  'apartment': 'Apartment',
  'room': 'Room',
  'house': 'House',
  'hotel': 'Hotel',
};

export enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum ApiPaths {
  Hotels = '/hotels',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ArrayCities: Cities = [
  {name: 'Paris',
    id: 1,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    }},
  {name: 'Cologne',
    id: 2,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    }},
  {name: 'Brussels',
    id: 3,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    }},
  {name: 'Amsterdam',
    id: 4,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    }},
  {name: 'Hamburg',
    id: 5,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    }},
  {name: 'Dusseldorf',
    id: 6,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    }}
];

export const ActionType = {
  CHANGE_CITY: 'changeCity',
  LOAD_OFFERS: 'loadOffers',
  OFFERS_SORTING: 'offersSorting',
  AUTHORIZED_USER: 'authorizedUser',
  SELECT_OFFER_ID: 'selectOfferId',
};

export const PERCENT_RATING = 20;

export const QUANTITY_OTHER_PLACES = 3;

export const DEFAULT_CITY = 'Paris';

export const QUANTITY_IMAGES = 6;
export const QUANTITY_COMMENTS = 5;

export const TEXT_SIGN_IN = 'Sign In';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

