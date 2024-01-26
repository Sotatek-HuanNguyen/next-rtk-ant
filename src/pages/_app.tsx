import { useAppSelector } from '@/hooks/reduxHooks';
import { ThemeType } from '@/interfaces';
import { store } from '@/stores/store';
import { getThemeConfig } from '@/styles/themeConfig';
import theme from '@/theme/themeConfig';
import { Page } from '@/types/page';
import { ConfigProvider, ThemeConfig } from 'antd';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import RootLayout from '../layouts';

type Props = AppProps & {
  Component: Page;
};

const persistor = persistStore(store);

function App({ Component, pageProps }: Props) {
  const theme = store.getState().theme;
  const Layout =
    (Component as Page).layout ||
    (({ children }: { children: ReactNode }) => <RootLayout>{children}</RootLayout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <NextNProgress />
          <ConfigProvider theme={getThemeConfig(theme as any)}>
            <Component {...pageProps} />
          </ConfigProvider>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
