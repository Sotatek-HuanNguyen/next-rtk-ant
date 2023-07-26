import { DownloadOutlined } from '@ant-design/icons';
import { Button, PaginationProps } from 'antd';
import { Pagination } from 'antd';
import React from 'react';

import classes from './index.module.less';

export type BasePaginationProps = PaginationProps;

export const BasePagination: React.FC<BasePaginationProps> = (props) => {
  return (
    <div className={classes.paginationCustom}>
      <Pagination {...props} />
      <Button type="primary" icon={<DownloadOutlined />} />
    </div>
  );
};
