import React from 'react';
import { View, ViewProps } from 'react-native';
import { AppText } from '../ui/app-text';
import { useAppTheme } from '../../hooks/use-app-theme';

type Props = ViewProps & {
  label: string;
};

export const Badge: React.FC<Props> = ({ label, style, ...rest }) => {
  const { theme } = useAppTheme();
  return (
    <View
      style={[
        {
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.xs,
          borderRadius: theme.radius.full,
          backgroundColor: theme.colors.primary,
        },
        style,
      ]}
      {...rest}>
      <AppText variant="caption" style={{ color: '#FFF' }}>
        {label}
      </AppText>
    </View>
  );
};

