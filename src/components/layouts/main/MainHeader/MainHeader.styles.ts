import { BaseLayout } from '@/components/common/BaseLayout/BaseLayout';
import { LAYOUT } from '@/styles/themes/constants';
import { media } from '@/styles/themes/constants';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

export const Header = styled(BaseLayout.Header)<Header>`
  line-height: 1.5;
  background: var(--layout-header-bg-color);

  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }

  @media only screen and ${media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
