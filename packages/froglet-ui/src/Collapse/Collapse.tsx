"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./collapse.css";

export interface CollapseProps extends HTMLAttributes<HTMLDetailsElement> {
  /** Whether the disclosure is open. Maps to the native `open` attribute. */
  open?: boolean;
  /** Collapse content. Include a `<CollapseSummary>` as the first child. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<details>` element. */
  ref?: React.Ref<HTMLDetailsElement>;
}

/** A brandless disclosure container wrapping the native `<details>` element. */
export const Collapse = ({
  children,
  className,
  ref,
  ...props
}: CollapseProps) => {
  return (
    <details ref={ref} className={classNames("collapse", className)} {...props}>
      {children}
    </details>
  );
};
