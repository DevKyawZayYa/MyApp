import React from 'react';
import { View } from 'react-native';
import {
  House,
  ShoppingBag,
  ShoppingCart,
  User,
} from 'lucide-react-native';
import { AppRoute } from '../../../app/constants/app-routes';
import type { MainTabParamList } from '../../../app/navigation/main-tabs.types';

const ACTIVE = '#111827';
const INACTIVE = '#C4C4C4';
const SIZE = 24;

type Props = {
  routeName: keyof MainTabParamList;
  focused: boolean;
};

const iconForRoute = (routeName: keyof MainTabParamList, focused: boolean) => {
  const color = focused ? ACTIVE : INACTIVE;
  const strokeWidth = focused ? 2.5 : 2;

  switch (routeName) {
    case AppRoute.PRODUCTS_STACK:
      return <House size={SIZE} color={color} strokeWidth={strokeWidth} />;
    case AppRoute.ORDERS_STACK:
      return <ShoppingBag size={SIZE} color={color} strokeWidth={strokeWidth} />;
    case AppRoute.CART:
      return <ShoppingCart size={SIZE} color={color} strokeWidth={strokeWidth} />;
    case AppRoute.PROFILE:
      return <User size={SIZE} color={color} strokeWidth={strokeWidth} />;
    default:
      return <View />;
  }
};

export const MainTabBarIcon: React.FC<Props> = ({ routeName, focused }) => {
  return <View style={{ alignItems: 'center', justifyContent: 'center' }}>{iconForRoute(routeName, focused)}</View>;
};
