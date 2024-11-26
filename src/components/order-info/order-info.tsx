import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector } from '@store';
import {
  feedsDataSelector,
  ingredientsDataSelector,
  ordersDataSelector
} from '@slices';
import { useParams } from 'react-router-dom';
import { OrderInfoProps } from '../ui/order-info/type';

export const OrderInfo: FC<OrderInfoProps> = ({ onlyMy }) => {
  const { number } = useParams();

  const orders = useSelector(ordersDataSelector);

  const feeds = useSelector(feedsDataSelector)?.orders;

  const ordersData = onlyMy ? orders : feeds;

  const orderData = ordersData?.find((el) => el.number === Number(number));

  const ingredients = useSelector(ingredientsDataSelector);

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients?.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
