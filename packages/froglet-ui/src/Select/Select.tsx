"use client";

import { ReactNode, SelectHTMLAttributes } from "react";
import classNames from "classnames";
import "./select.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Option elements to display in the dropdown. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<select>` element. */
  ref?: React.Ref<HTMLSelectElement>;
}

/** A brandless select element. All visual styling is driven by CSS custom properties. */
export const Select = ({ className, children, ref, ...props }: SelectProps) => {
  return (
    <select ref={ref} className={classNames("select", className)} {...props}>
      {children}
    </select>
  );
};
