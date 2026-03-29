import React from 'react';
import { View } from 'react-native';
import { AppText } from '../ui/app-text';

type Props = {
  message?: string;
};

export const ErrorView: React.FC<Props> = ({ message }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppText>{message ?? 'Something went wrong.'}</AppText>
    </View>
  );
};

