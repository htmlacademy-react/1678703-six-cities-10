
import {offersSorting} from '../../store/action';
import {useAppDispatch} from '../../hooks/index';
import { SortingType } from '../../const';
import {MouseEvent} from 'react';


export function OffersSorting(): JSX.Element{

  const dispatch = useAppDispatch();

  const handleSortingClick = (evt: MouseEvent<HTMLUListElement>) => {
    const selectedSorting = evt.target as HTMLLIElement;

    if(selectedSorting) {
      dispatch(offersSorting(selectedSorting.id));
    }
  };

  return (
    <ul className="places__options places__options--custom places__options--opened" onClick = {handleSortingClick}>
      <li className={'places__option '} tabIndex={0} id = {SortingType.Popular}>
        Popular
      </li>
      <li className={'places__option '} tabIndex={0} id = {SortingType.LowToHigh}>
        Price: low to high
      </li>
      <li className={'places__option '} tabIndex={0} id = {SortingType.HighToLow}>
        Price: high to low
      </li>
      <li className={'places__option '} tabIndex={0} id = {SortingType.TopRated}>
        Top rated first
      </li>
    </ul>
  );
}
