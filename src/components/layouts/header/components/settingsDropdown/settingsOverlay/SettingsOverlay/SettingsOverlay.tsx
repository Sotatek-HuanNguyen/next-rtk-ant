import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { BaseCollapseProps } from '@/components/common/BaseCollapse/BaseCollapse';
import { DropdownCollapse } from '@/components/layouts/header/Header.styles';
import { useAppSelector } from '@/hooks/reduxHooks';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { NightModeSettings } from '../nightModeSettings/NightModeSettings';
import * as S from './SettingsOverlay.styles';

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  const { isPWASupported, event } = useAppSelector((state) => state.pwa);

  const items: BaseCollapseProps['items'] = useMemo(
    () => [
      {
        label: t('header.changeLanguage'),
        key: 'languagePicker',
        children: <LanguagePicker />,
      },
      {
        label: t('header.changeTheme'),
        key: 'themePicker',
        children: <ThemePicker />,
      },
      {
        label: t('header.nightMode.title'),
        key: 'nightMode',
        children: <NightModeSettings />,
      },
    ],
    [t]
  );

  return (
    <S.SettingsOverlayMenu {...props}>
      <DropdownCollapse
        bordered={false}
        expandIconPosition="end"
        ghost
        defaultActiveKey="themePicker"
        items={items}
      />
      {isPWASupported && (
        <S.PwaInstallWrapper>
          <BaseButton
            block
            type="primary"
            onClick={() => event && (event as BeforeInstallPromptEvent).prompt()}
          >
            {t('common.pwa')}
          </BaseButton>
        </S.PwaInstallWrapper>
      )}
    </S.SettingsOverlayMenu>
  );
};