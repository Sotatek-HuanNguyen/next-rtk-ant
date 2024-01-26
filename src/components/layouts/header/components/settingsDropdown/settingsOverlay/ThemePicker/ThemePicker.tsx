import { MoonSunSwitch } from '@/components/common/MoonSunSwitch/MoonSunSwitch';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { ThemeType } from '@/interfaces';
import { setNightMode } from '@/stores/slices/nightModeSlice';
import { setTheme } from '@/stores/slices/themeSlice';
import React from 'react';

export const ThemePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleClickButton = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    dispatch(setNightMode(false));
  };

  return (
    <MoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
