import {SortingType, PERCENT_RATING} from './const';
import {Offers, Offer} from './types/offer';

let typeLowHigh = true;

function comparePrice (elementA: Offer, elementB: Offer) {
  const rankA = +elementA.price;
  const rankB = +elementB.price;
  return typeLowHigh ? rankA - rankB : rankB - rankA;
}

function compareRated (elementA: Offer, elementB: Offer) {
  const rankA = elementA.rating;
  const rankB = elementB.rating;
  return rankB - rankA;
}

export const getOffersSorting = (sortingType: string, offers: Offers) => {
  switch (sortingType) {
    case SortingType.Popular:
      return offers.slice();
    case SortingType.LowToHigh:
      typeLowHigh = true;
      return offers.slice().sort(comparePrice);
    case SortingType.HighToLow:
      typeLowHigh = false;
      return offers.slice().sort(comparePrice);
    case SortingType.TopRated:
      return offers.slice().sort(compareRated);
    default:
      return offers.slice();
  }
};

export const getRating = (rating: number) => ({
  width: `${Math.round(rating) * PERCENT_RATING}%`,
});
