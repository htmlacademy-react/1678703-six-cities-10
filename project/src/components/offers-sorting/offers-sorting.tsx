
import {offersSorting} from '../../store/action';
import {useAppDispatch} from '../../hooks/index';

// type OffersListProps = {
//   onSortingClick: (idOffer: string) => void;
// }


export function OffersSorting(): JSX.Element{

  // const {onSortingClick} = props;

  // const cityName = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleSortingClick = (evt: any) => {
    // onSortingClick('');
    // eslint-disable-next-line no-console
    // console.log('222', evt.target.id);
    if(evt.target.id) {
      dispatch(offersSorting(evt.target.id));
    }
  };

  return (
    <ul className="places__options places__options--custom places__options--opened" onClick = {handleSortingClick}>
      <li className={'places__option '} tabIndex={0} id = 'Popular'>
        Popular
      </li>
      <li className={'places__option '} tabIndex={0} id = 'PriceLow'>
        Price: low to high
      </li>
      <li className={'places__option '} tabIndex={0} id = 'PriceHigh'>
        Price: high to low
      </li>
      <li className={'places__option '} tabIndex={0} id = 'TopRated'>
        Top rated first
      </li>
    </ul>
  );
}


// ${offersSortingId === 'Popular' ? 'places__option--active' : ''}
// ${offersSortingId === 'PriceLow' ? 'places__option--active' : ''}
// ${offersSortingId === 'PriceHigh' ? 'places__option--active' : ''}
// ${offersSortingId === 'TopRated' ? 'places__option--active' : ''}
