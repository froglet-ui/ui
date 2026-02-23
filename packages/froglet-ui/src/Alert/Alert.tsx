"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./alert.css";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Alert content — the notification message. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** A brandless status notification container wrapping a `<div role="alert">`. */
export const Alert = ({
  children,
  className,
  ref,
  role = "alert",
  ...props
}: AlertProps) => {
  return (
    <div
      ref={ref}
      role={role}
      className={classNames("alert", className)}
      {...props}
    >
      {children}
    </div>
  );
};
