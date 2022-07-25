

type OffersListProps = {
  onSortingClick: (idOffer: string) => void;
}


export function OffersSorting(props: OffersListProps): JSX.Element{

  const {onSortingClick} = props;

  // const offersSortingId = '';

  const handleSortingClick = (evt: any) => {
    onSortingClick('');
    // eslint-disable-next-line no-console
    console.log('222', evt.target);
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
