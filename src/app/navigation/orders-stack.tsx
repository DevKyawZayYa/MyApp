import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '../constants/app-routes';
import { MyOrdersScreen } from '../../features/orders/screens/my-orders-screen';
import { OrderDetailScreen } from '../../features/orders/screens/order-detail-screen';
import { CheckoutScreen } from '../../features/orders/screens/checkout-screen';

export type OrdersStackParamList = {
  [AppRoute.ORDERS_STACK]: undefined;
  [AppRoute.ORDER_DETAIL]: { id: string } | undefined;
  [AppRoute.CHECKOUT]: undefined;
};

const Stack = createNativeStackNavigator<OrdersStackParamList>();

export const OrdersStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AppRoute.ORDERS_STACK}
        component={MyOrdersScreen}
      />
      <Stack.Screen
        name={AppRoute.ORDER_DETAIL}
        component={OrderDetailScreen}
      />
      <Stack.Screen name={AppRoute.CHECKOUT} component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

