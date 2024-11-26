import React, { FC } from 'react';
import { OrderStatusProps } from './type';
import { OrderStatusUI } from '@ui';

type TObject = { [key: string]: string };

const statusText: TObject = {
  pending: 'Готовится',
  done: 'Выполнен',
  created: 'Создан'
};

const textStyle: TObject = {
  pending: '#E52B1A',
  done: '#00CCCC',
  default: '#F2F2F3'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => (
  <OrderStatusUI textStyle={textStyle[status]} text={statusText[status]} />
);
