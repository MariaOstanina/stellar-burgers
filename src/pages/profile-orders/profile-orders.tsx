import { fetchOrders, ordersDataSelector } from '@slices';
import { useDispatch } from '@store';
import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useSelector } from '@store';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(ordersDataSelector);

  return <ProfileOrdersUI orders={orders} />;
};
