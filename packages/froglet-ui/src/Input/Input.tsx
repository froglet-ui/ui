"use client";

// Library Imports
import { InputHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./input.css";

/**
 * An interface describing the Input props.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A React ref that can be passed to access the input element directly.
   * With React 19, the ref is now passed as a prop.
   */
  ref?: React.Ref<HTMLInputElement>;

  /**
   * Additional CSS Classes to customize the styling of the Input component.
   */
  className?: string;
}

/**
 * The Input Component
 *
 * @param props - All standard input attributes, plus ref and className.
 *
 * @returns An input element with CSS Custom Property styling.
 */
export const Input = ({ ref, className, ...props }: InputProps) => {
  return (
    <input ref={ref} className={classNames("input", className)} {...props} />
  );
};
