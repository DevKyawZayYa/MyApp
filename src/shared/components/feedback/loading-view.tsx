import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme';

export const LoadingView = () => {
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color={theme.colors.primary} />
    </View>
  );
};

