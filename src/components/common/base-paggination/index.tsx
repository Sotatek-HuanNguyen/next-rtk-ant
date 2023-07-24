import { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import React from 'react';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => {
  return (
    <div>
      <Pagination {...props} />
    </div>
  );
};
