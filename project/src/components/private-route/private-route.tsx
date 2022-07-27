import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/index';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const isAuthorizedUser = useAppSelector((state) => state.isAuthorizedUser);

  return (
    isAuthorizedUser
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

