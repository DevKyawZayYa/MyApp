import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { AppRoute } from '../constants/app-routes';
import { ProductsStack } from './products-stack';
import { OrdersStack } from './orders-stack';
import { CartScreen } from '../../features/cart/screens/cart-screen';
import { ProfileScreen } from '../../features/user/screens/profile-screen';
import { MainTabBarIcon } from '../../shared/components/navigation/tab-bar-icons';
import type { MainTabParamList } from './main-tabs.types';

export type { MainTabParamList };

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => (
          <MainTabBarIcon
            routeName={route.name as keyof MainTabParamList}
            focused={focused}
          />
        ),
      })}>
      <Tab.Screen name={AppRoute.PRODUCTS_STACK} component={ProductsStack} />
      <Tab.Screen name={AppRoute.ORDERS_STACK} component={OrdersStack} />
      <Tab.Screen name={AppRoute.CART} component={CartScreen} />
      <Tab.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#F5F5F5',
    borderTopWidth: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

