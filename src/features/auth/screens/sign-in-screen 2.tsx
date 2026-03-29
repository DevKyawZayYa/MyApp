import React, { useState } from 'react';
import { View } from 'react-native';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppHeader } from '../../../shared/components/ui/app-header';
import { AppInput } from '../../../shared/components/ui/app-input';
import { AppButton } from '../../../shared/components/ui/app-button';
import { spacing } from '../../../app/theme/spacing';

export const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // Wire up to auth later
    console.log('Sign in', { email, password });
  };

  return (
    <AppScreen>
      <AppHeader title="Sign in" />
      <View style={{ gap: spacing.md, marginTop: spacing.lg }}>
        <AppInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <AppInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <AppButton label="Continue" onPress={onSubmit} />
      </View>
    </AppScreen>
  );
};

