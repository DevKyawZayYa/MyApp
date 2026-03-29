import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../../app/constants/app-routes';
import { useAppTheme } from '../../../shared/hooks/use-app-theme';

export const SplashScreen = () => {
  const navigation = useNavigation();
  const { theme } = useAppTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // In a real app, check auth state here
      navigation.reset({
        index: 0,
        routes: [{ name: AppRoute.SIGN_IN as never }],
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);

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

