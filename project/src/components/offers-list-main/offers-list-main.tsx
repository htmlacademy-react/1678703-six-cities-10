import {Offers} from '../../types/offer';
import {OffersSorting} from '../offers-sorting/offers-sorting';
import {OfferList} from '../offers-list/offers-list';


type OffersListMainProps = {
  quantityOffers: number;
  onOfferHover: (idOffer: string) => void;
  cityName: string;
}


export function OffersListMain(props: OffersListMainProps): JSX.Element{

  const {quantityOffers, onOfferHover, cityName} = props;

  const handleOfferHover = (idOffer: string) => {
    onOfferHover(idOffer);
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

        <OffersSorting/>

      </form>

      <OfferList onOfferCardHover={handleOfferHover}/>

    </section>
  );
}
