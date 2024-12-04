import { FC, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from '@store';
import { RegisterUI } from '@ui-pages';
import { regUser, userErrorSelector } from '@slices';

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userError = useSelector(userErrorSelector);

  const dispatch = useDispatch();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(regUser({ email, name: userName, password }));
  };

  return (
    <RegisterUI
      errorText={userError || ''}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
