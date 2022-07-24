import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';

type CityProps = {
  city: string;
  activ: boolean;
  onChangeCity: (idOffer: string) => void;
};

export function City (props: CityProps): JSX.Element {

  const {city, activ, onChangeCity} = props;

  const activClassName = activ ? 'tabs__item--active' : '';

  const handleChangeCity = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedCity = evt.target as HTMLLIElement;

    onChangeCity(selectedCity ? selectedCity.textContent as string : '');
  };

  return (
    <li className="locations__item" onClick={handleChangeCity}>
      <Link className={`locations__item-link tabs__item ${activClassName}`} to="#" >
        <span>{city}</span>
      </Link>
    </li>
  );
}
