import { useRouter } from 'next/router';
import React, { FC, ReactElement, useEffect } from 'react';

import { useAppSelector } from '../../stores/hooks';

type withAuthProps = (
  // eslint-disable-next-line no-unused-vars
  Component?: FC | any,
  // eslint-disable-next-line no-unused-vars, no-undef
  Layout?: ({ children }: { children: React.ReactNode }) => JSX.Element
) => FC;

const withAuth: withAuthProps = (Component, Layout) => {
  const Auth: FC = (): ReactElement | null => {
    const router = useRouter();
    const { token } = useAppSelector((state) => state.auth);
    // Get token in redux-store (or use localStorage for example)
    const isAuthenticated = !!token;

    useEffect(() => {
      // If user is not logged in, redirect to login
      if (!isAuthenticated) router.push('/login');
    });

    // If user is logged in, return original component
    return isAuthenticated ? (
      Layout ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Component />
      )
    ) : null;
  };

  return Auth;
};

export default withAuth;
