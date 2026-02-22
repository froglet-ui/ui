"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label or nested elements. Supports text, icons, and other React nodes. */
  children?: ReactNode;
  /** Additional CSS classes. */
  className?: string;
  /** Ref forwarded to the underlying button element. */
  ref?: React.Ref<HTMLButtonElement>;
}

/** A brandless button element styled entirely through CSS custom properties. */
export const Button = ({ children, className, ref, ...props }: ButtonProps) => {
  return (
    <button ref={ref} className={classNames("button", className)} {...props}>
      {children}
    </button>
  );
};
