import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '../constants/app-routes';
import { ProductListScreen } from '../../features/products/screens/product-list-screen';
import { ProductDetailScreen } from '../../features/products/screens/product-detail-screen';

export type ProductsStackParamList = {
  [AppRoute.PRODUCTS_STACK]: undefined;
  [AppRoute.PRODUCT_DETAIL]: { id: string } | undefined;
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AppRoute.PRODUCTS_STACK}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={AppRoute.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

