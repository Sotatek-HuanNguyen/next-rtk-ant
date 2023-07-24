import type { ThemeConfig } from 'antd';

import { lightColorsTheme } from './light/lightTheme';

export const themeObject = {
  light: lightColorsTheme,
};

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: themeObject['light'].primary,
    colorInfo: themeObject['light'].primary,
    colorSuccess: themeObject['light'].success,
    colorError: themeObject['light'].error,
    colorWarning: themeObject['light'].warning,
  },
};

export default theme;
