import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import {useState} from 'react';


type HeaderProps = {
    main: boolean;
  };


export function Header(props: HeaderProps): JSX.Element{

  const {main} = props;
  const [navigation, setNavigation] = useState(false);

  if (navigation && !main) {
    return <Navigate to={AppRoute.Main} />;
  }
  const handleLogoClick = () => {
    setNavigation(true);
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={main ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}
              to="#"
              onClick={handleLogoClick}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="#">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
