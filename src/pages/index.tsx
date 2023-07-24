import { BasePagination } from '@/components/common/base-paggination';
import MainLayout from '@/layouts/main-layout';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <h1>{t('title')}</h1>
      {/* <Button type="primary">Button</Button> */}
      <BasePagination defaultCurrent={1} total={50} />
    </div>
  );
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'profile', 'home'])),
    },
  };
}

Home.layout = MainLayout;
export default Home;
