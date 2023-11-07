import React from 'react';
import classNames from "classnames";

import styles from './ButtonGroup.module.scss';

type ButtonGroupProps = {
  children: React.ReactElement<HTMLButtonElement>[]
  position?: string
}

export default function ButtonGroup({ children, position = "end" }: ButtonGroupProps) {
  const buttonGroupClass = classNames(styles.buttonGroup, styles[position]);
  return (
    <div className={buttonGroupClass}>
      {children}
    </div>
  );

}