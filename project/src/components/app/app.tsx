import {MainPage} from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {OfferPage} from '../../pages/offer-page/offer-page';
import {LoginPage} from '../../pages/login-page/login-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import PrivateRoute from '../private-route/private-route';


export function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
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
