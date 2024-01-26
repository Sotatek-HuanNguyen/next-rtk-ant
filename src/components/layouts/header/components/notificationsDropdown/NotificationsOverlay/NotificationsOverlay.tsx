import { Mention, Notification as NotificationType } from '@/api/notifications.api';
import { BaseCol } from '@/components/common/BaseCol/BaseCol';
import { BaseNotification } from '@/components/common/BaseNotification/BaseNotification';
import { BaseRow } from '@/components/common/BaseRow/BaseRow';
import { BaseSpace } from '@/components/common/BaseSpace/BaseSpace';
import { notificationsSeverities } from '@/constants/notificationsSeverities';
import { capitalize } from '@/utils';
import Link from 'next/link';
import React, { ReactNode, useMemo } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import * as S from './NotificationsOverlay.styles';

interface NotificationsOverlayProps {
  notifications: NotificationType[];
  setNotifications: (state: NotificationType[]) => void;
}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({
  notifications,
  setNotifications,
  ...props
}) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find(
          (dbSeverity) => dbSeverity.id === notification.id
        )?.name;

        return (
          <BaseNotification
            key={index}
            type={type || 'warning'}
            title={capitalize(type || 'warning')}
            description={t(notification.description)}
            {...(type === 'mention' && {
              mentionIconSrc: (notification as Mention).userIcon,
              title: (notification as Mention).userName,
              description: (
                <Trans i18nKey={(notification as Mention).description}>
                  <S.LinkBtn type="link" href={(notification as Mention).href}>
                    {
                      { place: t((notification as Mention).place) } as unknown as ReactNode // todo: remove casting
                    }
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notifications, t]
  );

  return (
    <S.NoticesOverlayMenu {...props}>
      <BaseRow gutter={[20, 20]}>
        <BaseCol span={24}>
          {notifications.length > 0 ? (
            <BaseSpace direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </BaseSpace>
          ) : (
            <S.Text>{t('header.notifications.noNotifications')}</S.Text>
          )}
        </BaseCol>
        <BaseCol span={24}>
          <BaseRow gutter={[10, 10]}>
            {notifications.length > 0 && (
              <BaseCol span={24}>
                <S.Btn ghost onClick={() => setNotifications([])}>
                  {t('header.notifications.readAll')}
                </S.Btn>
              </BaseCol>
            )}
            <BaseCol span={24}>
              <S.Btn type="link">
                <Link href="/">{t('header.notifications.viewAll')}</Link>
              </S.Btn>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.NoticesOverlayMenu>
  );
};
