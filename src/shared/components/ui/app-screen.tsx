import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/use-app-theme';

type Props = PropsWithChildren<ViewProps>;

export const AppScreen: React.FC<Props> = ({ children, style, ...rest }) => {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: theme.spacing.md,
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
};

