import React from 'react';
import { View } from 'react-native';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppHeader } from '../../../shared/components/ui/app-header';
import { AppText } from '../../../shared/components/ui/app-text';

export const CartScreen = () => {
  return (
    <AppScreen>
      <AppHeader title="Cart" />
      <View>
        <AppText>Your cart is empty.</AppText>
      </View>
    </AppScreen>
  );
};

