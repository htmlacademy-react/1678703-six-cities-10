// import PropTypes from 'prop-types';
// import {Route, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {AuthorizationStatus, AppRoute} from '../../const';


// const PrivateRoute = ({render, path, exact, authorizationStatus}) => {

//   // console.log('111', authorizationStatus)
//   return (
//     <Route
//       path={path}
//       exact={exact}
//       render={(routeProps) => {
//         return (
//           authorizationStatus === AuthorizationStatus.AUTH
//             ? render(routeProps)
//             : <Redirect to={AppRoute.LOGIN} />
//         );
//       }}
//     />
//   );
// };

// PrivateRoute.propTypes = {
//   authorizationStatus: PropTypes.string.isRequired,
//   exact: PropTypes.bool.isRequired,
//   path: PropTypes.string.isRequired,
//   render: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   authorizationStatus: state.authorizationStatus,
// });


// export {PrivateRoute};
// export default connect(mapStateToProps)(PrivateRoute);

import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
