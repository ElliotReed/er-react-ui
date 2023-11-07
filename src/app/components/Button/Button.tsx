import React from 'react';
import classNames from "classnames";

import styles from './Button.module.scss';

type ButtonProps = {
  type?: "button" | "submit" | "reset"
  children: string | React.ReactNode
  onClick?: () => void
  title?: string
  disabled?: boolean
  bgColor?: string
  style?: string
  ariaLabel?: string
  shape?: string
}

export default function Button({
  type = "button",
  children,
  onClick,
  title = "",
  disabled = false,
  bgColor = styles.primary,
  style = "default",
  ariaLabel = "",
  shape = "pill",
}: ButtonProps) {
  const buttonClass = classNames(
    styles.button,
    bgColor,
    shape === "pill" ? styles.pill : null
  );
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}