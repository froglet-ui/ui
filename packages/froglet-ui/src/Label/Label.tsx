"use client";

import { LabelHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./label.css";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Label text or content. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<label>` element. */
  ref?: React.Ref<HTMLLabelElement>;
}

/** A brandless label element styled entirely through CSS custom properties. */
export const Label = ({ children, className, ref, ...props }: LabelProps) => {
  return (
    <label ref={ref} className={classNames("label", className)} {...props}>
      {children}
    </label>
  );
};
