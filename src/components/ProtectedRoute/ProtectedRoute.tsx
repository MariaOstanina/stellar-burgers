import { ReactElement } from 'react';
import { useSelector } from '@store';
import { userIsLoadingSelector, userIsAuthSelector } from '@slices';
import { Preloader } from '@ui';
import { Navigate, useLocation } from 'react-router';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: ReactElement;
};

export const ProtectedRoute = ({
  children,
  onlyUnAuth
}: ProtectedRouteProps) => {
  const isLoading = useSelector(userIsLoadingSelector);
  const isAuth = useSelector(userIsAuthSelector);
  const location = useLocation();

  if (isLoading) {
    return <Preloader />;
  }

  // для авторизованных и не авторизован
  if (!onlyUnAuth && !isAuth) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  }

  // для неавторизованных и авторизован
  if (onlyUnAuth && isAuth) {
    const from = location.state?.from || { pathname: '/' };

    return <Navigate replace to={from} />;
  }
  return children;
};
