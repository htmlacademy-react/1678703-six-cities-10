import {Link} from 'react-router-dom';

type CityProps = {
  city: string;
  activ: boolean;
};

export function City (props: CityProps): JSX.Element {

  const {city, activ} = props;

  const activClassName = activ ? 'tabs__item--active' : '';

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${activClassName}`} to="#" >
        <span>{city}</span>
      </Link>
    </li>
  );
}
