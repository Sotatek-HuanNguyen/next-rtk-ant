import { BaseSwitch } from '@/components/common/BaseSwitch/BaseSwitch';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setNightMode, setNightTime } from '@/stores/slices/nightModeSlice';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { NightTimePicker } from './NightTimePicker/NightTimePicker';

export const NightModeSettings: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;
  const nightTime = nightModeState.nightTime;

  const handleChange = (isNightMode: boolean) => {
    dispatch(setNightMode(isNightMode));
  };

  const handleNightTime = (nightTime: number[]) => {
    dispatch(setNightTime(nightTime));
  };

  return (
    <>
      <SwitchContainer>
        <span>{t('common.auto')}</span>
        <BaseSwitch
          checkedChildren="On"
          unCheckedChildren="Off"
          checked={isNightMode}
          onChange={handleChange}
        />
      </SwitchContainer>
      {isNightMode && <NightTimePicker nightTime={nightTime} setNightTime={handleNightTime} />}
    </>
  );
};

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
