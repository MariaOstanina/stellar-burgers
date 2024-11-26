import { FC, useMemo, useState } from 'react';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import {
  burgerConstructorSelector,
  userIsAuthSelector,
  resetBurgerConstructor
} from '@slices';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderBurgerApi } from '@api';

export const BurgerConstructor: FC = () => {
  const constructorItems = useSelector(burgerConstructorSelector);

  const orderIngredientsId: string[] = [];
  constructorItems.bun?._id &&
    orderIngredientsId.push(constructorItems.bun?._id);
  constructorItems.ingredients.length &&
    constructorItems.ingredients.forEach((el) =>
      orderIngredientsId.push(el._id)
    );

  const isAuth = useSelector(userIsAuthSelector);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [orderRequest, setOrderRequest] = useState(false);

  const [orderModalData, setOrderModalData] = useState<TOrder | null>(null);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;

    if (!isAuth) {
      navigate('/login', { replace: true });
    } else {
      setOrderRequest(true);
      orderBurgerApi(orderIngredientsId).then((res) => {
        setOrderModalData(res.order);
        setOrderRequest(false);
        dispatch(resetBurgerConstructor());
      });
    }
  };

  const closeOrderModal = () => {
    setOrderModalData(null);
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (acc: number, ing: TConstructorIngredient) => acc + ing.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
