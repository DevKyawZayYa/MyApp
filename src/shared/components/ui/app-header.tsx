import React from 'react';
import { View } from 'react-native';
import { AppText } from './app-text';
import { useAppTheme } from '../../hooks/use-app-theme';

type Props = {
  title: string;
};

export const AppHeader: React.FC<Props> = ({ title }) => {
  const { theme } = useAppTheme();

  return (
    <View
      style={{
        paddingVertical: theme.spacing.md,
      }}>
      <AppText variant="heading">{title}</AppText>
    </View>
  );
};

