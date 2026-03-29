import React from 'react';
import { AppText } from '../ui/app-text';
import { formatCurrency } from '../../utils/currency';

type Props = {
  amount: number;
  currency?: string;
};

export const PriceText: React.FC<Props> = ({ amount, currency = 'USD' }) => {
  return <AppText>{formatCurrency(amount, currency)}</AppText>;
};

