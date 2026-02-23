"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./badge.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge text or content. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<span>` element. */
  ref?: React.Ref<HTMLSpanElement>;
}

/** A brandless inline badge styled entirely through CSS custom properties. */
export const Badge = ({ children, className, ref, ...props }: BadgeProps) => {
  return (
    <span ref={ref} className={classNames("badge", className)} {...props}>
      {children}
    </span>
  );
};
