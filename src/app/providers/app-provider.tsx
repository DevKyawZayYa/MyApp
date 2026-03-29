import React, { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './theme-provider';
import { QueryProvider } from './query-provider';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
};

