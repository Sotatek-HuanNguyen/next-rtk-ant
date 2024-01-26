import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { BasePopover } from '@/components/common/BasePopover/BasePopover';
import { HeaderActionWrapper } from '@/components/layouts/header/Header.styles';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover content={<SettingsOverlay />} trigger="click" afterOpenChange={setOpened}>
      <HeaderActionWrapper>
        <BaseButton
          ghost={isOpened}
          type={isOpened ? 'default' : 'text'}
          icon={<SettingOutlined />}
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
