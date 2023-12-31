import AdminLayout from '@/layouts/admin-layout.tsx';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.push('/dashboard');
  }
  return <></>;
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

Home.layout = AdminLayout;
export default Home;
