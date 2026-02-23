"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export interface CollapseSummaryProps extends HTMLAttributes<HTMLElement> {
  /** Summary text or content — rendered as the disclosure trigger. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<summary>` element. */
  ref?: React.Ref<HTMLElement>;
}

/** A brandless disclosure trigger wrapping the native `<summary>` element. */
export const CollapseSummary = ({
  children,
  className,
  ref,
  ...props
}: CollapseSummaryProps) => {
  return (
    <summary
      ref={ref}
      className={classNames("collapse-summary", className)}
      {...props}
    >
      {children}
    </summary>
  );
};
