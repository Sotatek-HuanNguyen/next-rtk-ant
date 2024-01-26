import { FONT_SIZE } from '@/styles/themes/constants';
import { defineColorBySeverity } from '@/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

import { NotificationType } from '../BaseNotification/BaseNotification';

interface BadgeProps {
  $severity?: NotificationType;
}

export const Badge = styled(AntBadge)<BadgeProps>`
  .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.$severity)};
    font-size: ${FONT_SIZE.xs};
  }

  .ant-badge-count-sm {
    font-size: ${FONT_SIZE.xs};
  }
`;
