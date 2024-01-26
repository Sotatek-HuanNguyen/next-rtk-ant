import { mapBadgeStatus } from '@/utils';
import { Badge, BadgeProps } from 'antd';
import React from 'react';

import * as S from './BaseBadge.styles';

export type BaseBadgeProps = BadgeProps;

interface BaseBadgeInterface extends React.FC<BaseBadgeProps> {
  Ribbon: typeof Badge.Ribbon;
}

export const BaseBadge: BaseBadgeInterface = ({ status, children, count, ...props }) => {
  const countSeverityStatus = count ? { count, $severity: mapBadgeStatus(status) } : { status };
  const transformedProps = status ? countSeverityStatus : { count };
  return (
    <S.Badge {...transformedProps} {...props}>
      {children}
    </S.Badge>
  );
};

BaseBadge.Ribbon = Badge.Ribbon;
