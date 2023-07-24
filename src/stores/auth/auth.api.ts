import { baseQuery } from '@/utils/common';
import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getData: builder.query<unknown, void>({
      query: () => '/users/me?populate=*',
      providesTags: ['User'],
    }),
  }),
});

export const { useGetDataQuery } = userApi;
