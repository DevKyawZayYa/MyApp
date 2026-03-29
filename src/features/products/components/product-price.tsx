import React from 'react';
import { PriceText } from '../../../shared/components/display/price-text';

type Props = {
  price: number;
  currency?: string;
};

export const ProductPrice: React.FC<Props> = ({
  price,
  currency = 'USD',
}) => {
  return <PriceText amount={price} currency={currency} />;
};

