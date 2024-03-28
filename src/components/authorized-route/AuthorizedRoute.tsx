import { useSelector } from 'react-redux';
import { selectIsUserLogged } from '../../store/user/user.slice';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthorizedRouteProps {
  children: ReactElement;
}

export function AuthorizedRoute(props: AuthorizedRouteProps) {
  return useSelector(selectIsUserLogged) ? (
    props.children
  ) : (
    <Navigate to={'/403'} />
  );
}
