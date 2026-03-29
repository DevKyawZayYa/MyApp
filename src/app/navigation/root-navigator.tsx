import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '../constants/app-routes';
import { AuthStack } from './auth-stack';
import { MainTabs } from './main-tabs';
import { SplashScreen } from '../../features/auth/screens/splash-screen';

export type RootStackParamList = {
  [AppRoute.SPLASH]: undefined;
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.MAIN_TABS]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoute.MAIN_TABS}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={AppRoute.SPLASH} component={SplashScreen} />
        {/* <Stack.Screen name={AppRoute.SIGN_IN} component={AuthStack} /> */}
        <Stack.Screen name={AppRoute.MAIN_TABS} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

