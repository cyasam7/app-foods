import { DefaultTheme } from 'react-native-paper';
import { accentColor, defaultPrimarycolor } from './utils/contants';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultPrimarycolor,
    secondary: accentColor,
  },
};
