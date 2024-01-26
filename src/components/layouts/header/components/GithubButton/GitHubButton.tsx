import { useAppSelector } from '@/hooks/reduxHooks';
import React from 'react';

import * as S from './GitHubButton.styles';

export const GitHubButton: React.FC = (props) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <S.Button
      type="default"
      href="https://github.com/altence/lightence-admin"
      icon={<S.GithubIcon />}
      target="_blank"
      $isDark={theme === 'dark'}
      {...props}
    >
      GitHub
    </S.Button>
  );
};
