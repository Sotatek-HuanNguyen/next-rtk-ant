import { removeCredentials } from '@/stores/auth/auth.slice';
import { RootState } from '@/stores/store';
import { store } from '@/stores/store';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Router from 'next/router';

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

export const baseQueryWithAuthentication = async () => {
  let result: any = await baseQuery();
  if (result?.error && result?.error?.status === 401) {
    store.dispatch(removeCredentials());
    Router.push('/login');
  }
  return result;
};
