import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme';

export const AppInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
  const { theme } = useAppTheme();

  return (
    <TextInput
      style={[
        {
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.md,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
        },
        style,
      ]}
      placeholderTextColor={theme.colors.mutedText}
      {...rest}
    />
  );
};

