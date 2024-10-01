import { FC, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterUI } from '@ui-pages';
import { registerUserApi, TRegisterData } from '@api';
import { registry } from '@slices';

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const email = data.get('email') as string;
    const name = data.get('name');
    const password = data.get('password');

    const formData = { email, name, password } as TRegisterData;

    dispatch(registry(formData));
  };

  return (
    <RegisterUI
      errorText=''
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
