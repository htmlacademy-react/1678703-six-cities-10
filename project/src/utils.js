import {SortingType, PERCENT_RATING} from './const';

let typeLowHigh = true;

const comparePrice = (elementA, elementB) => {
  const rankA = +elementA.price;
  const rankB = +elementB.price;
  return typeLowHigh ? rankA - rankB : rankB - rankA;
};

const compareRated = (elementA, elementB) => {
  const rankA = elementA.rating;
  const rankB = elementB.rating;
  return rankB - rankA;
};

const getOffersSorting = (sortingType, offers) => {
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

const getRating = (rating) => ({
  width: `${Math.round(rating) * PERCENT_RATING}%`,
});

export {getOffersSorting, getRating};
