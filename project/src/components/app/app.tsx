import {MainPage} from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offer';


type AppProps = {
  quantityOffers: number;
  offers: Offers;
};

export function App(props: AppProps): JSX.Element {

  const {quantityOffers, offers} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage quantityOffers={quantityOffers} offers ={offers} />}
        />
        <Route path={AppRoute.OfferId} element={<OfferPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//AuthorizationStatus.Auth - TEST!
