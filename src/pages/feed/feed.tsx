import {
  feedsDataSelector,
  fetchFeeds,
  fetchOrders,
  ordersDataSelector
} from '@slices';
import { useDispatch, useSelector } from '@store';
import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { FC, useEffect } from 'react';

export const Feed: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeeds());
  }, []);

  const orders = useSelector(feedsDataSelector)?.orders;

  if (!orders?.length) {
    return <Preloader />;
  }

  const updateFeeds = () => {
    dispatch(fetchFeeds());
  };

  return <FeedUI orders={orders} handleGetFeeds={updateFeeds} />;
};
