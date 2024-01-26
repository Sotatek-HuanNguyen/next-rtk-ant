import { References } from '@/components/common/References/References';
import { Header } from '@/components/layouts/header/Header';
import MainContent from '@/components/layouts/main/MainContent/MainContent';
import { MainHeader } from '@/components/layouts/main/MainHeader/MainHeader';
import * as S from '@/components/layouts/main/MainLayout/MainLayout.styles';
import MainSider from '@/components/layouts/main/sider/MainSider/MainSider';
import { useResponsive } from '@/hooks/useResponsive';
import React, { ReactNode, useEffect, useState } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop } = useResponsive();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>{children}</div>
          {!isTwoColumnsLayout && <References />}
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
