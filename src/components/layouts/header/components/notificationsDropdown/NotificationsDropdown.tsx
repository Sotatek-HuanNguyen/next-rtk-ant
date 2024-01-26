import { Notification, notifications as fetchedNotifications } from '@/api/notifications.api';
import { BaseBadge } from '@/components/common/BaseBadge/BaseBadge';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { BasePopover } from '@/components/common/BasePopover/BasePopover';
import { HeaderActionWrapper } from '@/components/layouts/header/Header.styles';
import { NotificationsOverlay } from '@/components/layouts/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { BellOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(fetchedNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover
      trigger="click"
      content={
        <NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />
      }
      afterOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <BaseButton
          ghost={isOpened}
          type={isOpened ? 'default' : 'text'}
          icon={
            <BaseBadge dot>
              <BellOutlined />
            </BaseBadge>
          }
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
