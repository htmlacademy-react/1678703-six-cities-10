import {Cities} from './types/city';

export enum AppRoute {
  Main = '/',
  OfferId = '/offer/:id',
  Offer = '/offer/',
  Favorites = '/favorites',
  Login = '/login',
  NotFoundPage = '/not_found'
}

export enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export enum SortingType {
  Popular = 'popular',
  LowToHigh = 'lowToHigh',
  HighToLow = 'highToLow',
  TopRated = 'topRated',
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

// enum CityMap {
//   Location = {
//     latitude: 52.38333,
//     longitude: 4.9,
//     zoom: 11,
//   },
//   Name = 'Amsterdam'
// }

export const arrayCities: Cities = [
  {name: 'Paris',
    id: 1,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }},
  {name: 'Cologne',
    id: 2,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    }},
  {name: 'Brussels',
    id: 3,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }},
  {name: 'Amsterdam',
    id: 4,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    }},
  {name: 'Hamburg',
    id: 5,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    }},
  {name: 'Dusseldorf',
    id: 6,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    }}
];


export const PERCENT_RATING = 20;

export const QUANTITY_OTHER_PLACES = 3;

export const DEFAULT_CITY = 'Paris';

export const QUANTITY_IMAGES = 6;

export const TEXT_SIGN_IN = 'Sign In';

