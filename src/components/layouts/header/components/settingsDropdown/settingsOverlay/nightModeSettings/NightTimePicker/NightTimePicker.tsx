import { NightTimeSlider } from '@/components/layouts/header/dropdowns/settingsDropdown/settingsOverlay/nightModeSettings/NightTimeSlider/NightTimeSlider';
import React from 'react';

import * as S from './NightTimePicker.styles';

interface NightTimePickerProps {
  nightTime: number[];
  setNightTime: (nightTime: number[]) => void;
}

export const NightTimePicker: React.FC<NightTimePickerProps> = ({ nightTime, setNightTime }) => {
  return (
    <S.Wrapper>
      <NightTimeSlider from={nightTime[0]} to={nightTime[1]} setNightTime={setNightTime} />
    </S.Wrapper>
  );
};
