enum AppRoute {
  Main = '/',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  Login = '/login',
  NotFoundPage = '/not_found'
}

 enum HousingType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

 enum SortingType {
  Popular = 'popular',
  LowToHigh = 'lowToHigh',
  HighToLow = 'highToLow',
  TopRated = 'topRated',
}

 enum ApiPaths {
  Hotels = '/hotels',
  Login = '/login'
}

 enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const PERCENT_RATING = 20;

const QUANTITY_OTHER_PLACES = 3;

const DEFAULT_CITY = 'Paris';

const QUANTITY_IMAGES = 6;

const TEXT_SIGN_IN = 'Sign In';

export {AppRoute, HousingType, DEFAULT_CITY, SortingType, AuthorizationStatus, TEXT_SIGN_IN, ApiPaths, QUANTITY_OTHER_PLACES, QUANTITY_IMAGES, PERCENT_RATING};
