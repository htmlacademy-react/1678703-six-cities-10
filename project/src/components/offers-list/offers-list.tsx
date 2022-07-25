import {OfferCard} from '../offer-card/offer-card';
import {Offers} from '../../types/offer';
import {OffersSorting} from '../offers-sorting/offers-sorting';


type OffersListProps = {
  quantityOffers: number;
  offers: Offers;
  onOfferHover: (idOffer: string) => void;
  cityName: string;
}


export function OffersList(props: OffersListProps): JSX.Element{

  const {quantityOffers, offers, onOfferHover, cityName} = props;

  const handleOfferHover = (idOffer: string) => {
    onOfferHover(idOffer);
  };

  const handleSortingClick = (idOffer1: any) => {
    // eslint-disable-next-line no-console
    console.log('222', idOffer1);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {quantityOffers} places to stay in {cityName}
      </b>
      <form className="places__sorting" action="#" method="get">


        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <OffersSorting onSortingClick={handleSortingClick} />

      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            isOtherOffer={false}
            onOfferCardHover={handleOfferHover}
          />
        ))}
      </div>
    </section>
  );
}
