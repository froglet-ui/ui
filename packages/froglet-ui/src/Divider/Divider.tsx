"use client";

import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./divider.css";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Visual and semantic orientation. Sets `.divider--vertical` and `aria-orientation`. */
  orientation?: "horizontal" | "vertical";
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<hr>` element. */
  ref?: React.Ref<HTMLHRElement>;
}

/** A brandless separator element styled entirely through CSS custom properties. */
export const Divider = ({
  orientation = "horizontal",
  className,
  ref,
  ...props
}: DividerProps) => {
  return (
    <hr
      ref={ref}
      aria-orientation={orientation === "vertical" ? "vertical" : undefined}
      className={classNames(
        "divider",
        { "divider--vertical": orientation === "vertical" },
        className,
      )}
      {...props}
    />
  );
};
