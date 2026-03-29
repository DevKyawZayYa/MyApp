import React from 'react';
import { View } from 'react-native';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppHeader } from '../../../shared/components/ui/app-header';
import { AppText } from '../../../shared/components/ui/app-text';

export const MyOrdersScreen = () => {
  return (
    <AppScreen>
      <AppHeader title="My orders" />
      <View>
        <AppText>You don't have any orders yet.</AppText>
      </View>
    </AppScreen>
  );
};

