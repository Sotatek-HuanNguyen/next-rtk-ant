import SearchIcon from '@/assets/images/svg/icon_search.svg';
import { BaseButton } from '@/components/common/base-button';
import AdminLayout from '@/layouts/admin-layout.tsx';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Demo = () => {
  return (
    <div>
      <BaseButton icon={<SearchIcon />} size="middle" type="primary">
        button
      </BaseButton>
    </div>
  );
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

Demo.layout = AdminLayout;

export default Demo;
