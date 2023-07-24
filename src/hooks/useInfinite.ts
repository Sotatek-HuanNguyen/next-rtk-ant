import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useEffect, useState } from 'react';

export interface IListQueryResponse {
  data: any[];
  meta: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
    };
  };
}

const useInfiniteScroll = (
  useGetDataListQuery: UseLazyQuery<any>,
  { pageSize = 10, ...queryParameters }
) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [combinedData, setCombinedData] = useState<any>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [metaData, setMetaData] = useState<any>(null);
  const [trigger, { isFetching, isLoading, isSuccess, error }] = useGetDataListQuery();
  const getData = (page: number) => {
    trigger({
      page: page,
      pageSize,
      ...queryParameters,
    }).then((res) => {
      if (res?.data) {
        const { data, meta } = res?.data as any;
        const { pagination } = meta;

        setMetaData(meta);
        setCurrentPage(pagination?.page);
        setHasNextPage(Number(pagination?.page) < Number(pagination?.pageCount));

        if (pagination?.page == 1) {
          setCombinedData(data);
        } else if (currentPage < pagination?.page) {
          setCombinedData((previousData: any) => [...previousData, ...data]);
        }
      }
    });
  };

  useEffect(() => {
    getData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = () => {
    setCurrentPage(0);
    getData(1);
  };

  const readMore = () => {
    getData(currentPage + 1);
  };

  return {
    combinedData,
    error,
    hasNextPage,
    metaData,
    isLoading,
    isFetching,
    isSuccess,
    readMore,
    refresh,
  };
};

export default useInfiniteScroll;
