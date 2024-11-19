import { FC, SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LoginUI } from '@ui-pages';
import { loginUser, userIsAuthSelector, userErrorSelector } from '@slices';
import { useDispatch, useSelector } from '@store';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuth = useSelector(userIsAuthSelector);
  const userError = useSelector(userErrorSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (isAuth) {
    return <Navigate to='/profile' />;
  }

  return (
    <LoginUI
      errorText={userError || ''}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
