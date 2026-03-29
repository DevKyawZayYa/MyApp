import React from 'react';
import { ActivityIndicator, Pressable, PressableProps, Text } from 'react-native';
import { useAppTheme } from '../../hooks/use-app-theme';

type Props = PressableProps & {
  label: string;
  loading?: boolean;
};

export const AppButton: React.FC<Props> = ({ label, loading, ...rest }) => {
  const { theme } = useAppTheme();

  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [
        {
          backgroundColor: theme.colors.primary,
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          borderRadius: theme.radius.md,
          opacity: pressed || loading ? 0.7 : 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        (rest as any).style,
      ]}
      disabled={loading || rest.disabled}>
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text style={{ color: '#FFF', fontWeight: '600' }}>{label}</Text>
      )}
    </Pressable>
  );
};

