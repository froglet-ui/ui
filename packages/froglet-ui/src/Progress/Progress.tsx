"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./progress.css";

export interface ProgressProps extends HTMLAttributes<HTMLProgressElement> {
  /** Current progress value. Omit for indeterminate state. */
  value?: number;
  /** Maximum value. Defaults to `1`. */
  max?: number;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<progress>` element. */
  ref?: React.Ref<HTMLProgressElement>;
}

/** A brandless progress bar wrapping a `<progress>` element. */
export const Progress = ({ className, ref, ...props }: ProgressProps) => {
  return (
    <progress
      ref={ref}
      className={classNames("progress", className)}
      {...props}
    />
  );
};
