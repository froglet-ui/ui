"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./box.css";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Box content. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** A brandless generic container wrapping a `<div>` element. */
export const Box = ({ children, className, ref, ...props }: BoxProps) => {
  return (
    <div ref={ref} className={classNames("box", className)} {...props}>
      {children}
    </div>
  );
};
