import {OfferCard} from '../offer-card/offer-card';
import {Offers} from '../../types/offer';
import {useAppSelector} from '../../hooks/index';
import {getOffersSorting} from '../../utils';


type OffersListProps = {
  offers: Offers;
  onOfferListHover: (idOffer: string) => void;
}


export function OffersList(props: OffersListProps): JSX.Element{

  const {offers, onOfferListHover} = props;
  const sorting = useAppSelector((state) => state.sorting);
  const sortedOffers = getOffersSorting(sorting, offers);

  const handleOfferHover = (idOffer: string) => {
    onOfferListHover(idOffer);
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
