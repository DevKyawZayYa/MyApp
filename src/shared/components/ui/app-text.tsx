import React from 'react';
import { Text, TextProps } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme';

type Props = TextProps & {
  variant?: 'heading' | 'body' | 'caption';
};

export const AppText: React.FC<Props> = ({
  children,
  variant = 'body',
  style,
  ...rest
}) => {
  const { theme } = useAppTheme();
  const baseStyle =
    variant === 'heading'
      ? theme.typography.heading
      : variant === 'caption'
      ? theme.typography.caption
      : theme.typography.body;

  return (
    <Text style={[{ color: theme.colors.text }, baseStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

