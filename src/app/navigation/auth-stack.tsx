import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoute } from '../constants/app-routes';
import { SignInScreen } from '../../features/auth/screens/sign-in-screen';

export type AuthStackParamList = {
  [AppRoute.SIGN_IN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
    </Stack.Navigator>
  );
};

