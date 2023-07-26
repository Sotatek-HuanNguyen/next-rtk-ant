import { Severity } from '@/interfaces';
import { ButtonProps as AntButtonProps, Button as AntdButton, Button } from 'antd';
import cn from 'classnames';
import React from 'react';

import classes from './index.module.less';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { children, className } = props;
  return (
    <Button className={cn(className, classes.button)} {...props}>
      {children}
    </Button>
  );
};
