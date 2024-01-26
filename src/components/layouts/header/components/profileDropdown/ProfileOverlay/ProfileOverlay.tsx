import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './ProfileOverlay.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div {...props}>
      <S.Text>
        <Link href="/profile">{t('profile.title')}</Link>
      </S.Text>
      <S.ItemsDivider />
      <S.Text>
        <Link href="/logout">{t('header.logout')}</Link>
      </S.Text>
    </div>
  );
};
