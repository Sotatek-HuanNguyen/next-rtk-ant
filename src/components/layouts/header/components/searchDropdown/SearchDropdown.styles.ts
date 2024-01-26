import { BasePopover } from '@/components/common/BasePopover/BasePopover';
import { BREAKPOINTS, media } from '@/styles/themes/constants';
import styled from 'styled-components';

export const Popover = styled(BasePopover)`
  .ant-popover {
    box-shadow: var(--box-shadow);

    @media only screen and ${media.xs} and (max-width: ${BREAKPOINTS.md - 0.02}px) {
      width: calc(100vw - 16px);
      max-width: 600px;
    }

    @media only screen and ${media.md} {
      width: 323px;
    }
  }
`;
