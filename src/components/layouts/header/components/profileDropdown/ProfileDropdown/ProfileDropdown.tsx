import { BaseAvatar } from '@/components/common/BaseAvatar/BaseAvatar';
import { BaseCol } from '@/components/common/BaseCol/BaseCol';
import { BasePopover } from '@/components/common/BasePopover/BasePopover';
import { BaseRow } from '@/components/common/BaseRow/BaseRow';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useResponsive } from '@/hooks/useResponsive';
import React from 'react';

import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import * as S from './ProfileDropdown.styles';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src={user.imgUrl} alt="User" shape="circle" size={40} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <span>{`${user.firstName} ${user.lastName[0]}`}</span>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  ) : null;
};
