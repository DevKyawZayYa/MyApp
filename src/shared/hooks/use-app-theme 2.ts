import { useTheme } from 'styled-components/native';
import type { AppTheme } from '../../app/theme';

export const useAppTheme = () => {
  const theme = useTheme() as AppTheme;
  return { theme };
};

