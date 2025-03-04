"use client";

// Library Imports
import { InputHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./input.css";

/**
 * An interface describing the Input props.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A React ref that can be passed to access the input element directly.
   * With React 19, the ref is now passed as a prop.
   */
  ref?: React.Ref<HTMLInputElement>;

  /**
   * Additional CSS classes.
   */
  className?: string;
}

/**
 * The Input Component
 *
 * @param props - All standard input attributes, plus ref and className.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --input-padding
 * --input-border-width
 * --input-border-color
 * --input-border-radius
 * --input-font-size
 * --input-text-color
 * --input-background-color
 * --input-text-color-placeholder
 * --input-border-color-focus
 * --input-outline-width-focus
 * --input-outline-color-focus
 * --input-outline-offset-focus
 * --input-border-color-disabled
 * --input-text-color-disabled
 * --input-background-color-disabled
 * --input-border-color-invalid
 * ```
 *
 * @returns An input element with CSS Custom Property styling.
 */
export const Input = ({ ref, className, ...props }: InputProps) => {
  return (
    <input ref={ref} className={classNames("input", className)} {...props} />
  );
};
