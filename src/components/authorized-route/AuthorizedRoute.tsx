import { useSelector } from 'react-redux';
import { selectIsUserLogged } from '../../store/user/user.slice';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthorizedRouteProps {
  children: ReactElement;
}

export function AuthorizedRoute(props: AuthorizedRouteProps) {
  const [initialized, setInitialized] = useState(false);
  const isLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      return;
    }
    navigate(initialized ? '/templates' : '/403');
  }, [isLogged]);

  useEffect(() => setInitialized(true), []);

  if (!isLogged) {
    return <></>;
  }

  return props.children;
}
