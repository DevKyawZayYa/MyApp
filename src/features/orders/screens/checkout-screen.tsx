import React from 'react';
import { View } from 'react-native';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppHeader } from '../../../shared/components/ui/app-header';
import { AppText } from '../../../shared/components/ui/app-text';

export const CheckoutScreen = () => {
  return (
    <AppScreen>
      <AppHeader title="Checkout" />
      <View>
        <AppText>Checkout flow coming soon.</AppText>
      </View>
    </AppScreen>
  );
};

