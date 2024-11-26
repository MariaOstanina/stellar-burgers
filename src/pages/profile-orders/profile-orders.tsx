import { fetchOrders, ordersDataSelector } from '@slices';
import { useDispatch } from '@store';
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders: TOrder[] = useSelector(ordersDataSelector);

  return <ProfileOrdersUI orders={orders} />;
};
