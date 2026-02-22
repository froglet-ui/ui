"use client";

// Library Imports
import { InputHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<input>` element. */
  ref?: React.Ref<HTMLInputElement>;
}

/** A brandless input. All visual styling is driven by CSS custom properties. */
export const Input = ({ ref, className, ...props }: InputProps) => {
  return (
    <input ref={ref} className={classNames("input", className)} {...props} />
  );
};
