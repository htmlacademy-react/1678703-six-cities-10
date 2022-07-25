import {OfferCard} from '../offer-card/offer-card';
import {Offers} from '../../types/offer';
import {OffersSorting} from '../offers-sorting/offers-sorting';
import {useAppSelector} from '../../hooks/index';
import {getOffersSorting} from '../../utils';


type OffersListProps = {
  quantityOffers: number;
  offers: Offers;
  onOfferHover: (idOffer: string) => void;
  cityName: string;
}


export function OffersList(props: OffersListProps): JSX.Element{

  const {quantityOffers, offers, onOfferHover, cityName} = props;

  const sorting = useAppSelector((state) => state.sorting);

  const sortedOffers = getOffersSorting(sorting, offers);

  const handleOfferHover = (idOffer: string) => {
    onOfferHover(idOffer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            isOtherOffer={false}
            onOfferCardHover={handleOfferHover}
          />
        ))}
      </div>
  );
}
