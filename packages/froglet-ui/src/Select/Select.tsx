"use client";

// Library Imports
import { ReactNode, SelectHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./select.css";

/**
 * An interface describing the Select props.
 */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Option elements to display in the dropdown.
   * Supports text, icons, and other React nodes.
   */
  children?: ReactNode;

  /**
   * Additional CSS classes for styling.
   */
  className?: string;
}

/**
 * The Select Component
 *
 * @param props - All standard select attributes, plus children and className.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --select-background-color
 * --select-text-color
 * --select-font-size
 * --select-padding
 * --select-border-color
 * --select-border-width
 * --select-border-radius
 * --select-background-color-hover
 * --select-text-color-hover
 * --select-border-color-hover
 * --select-background-color-disabled
 * --select-text-color-disabled
 * --select-border-color-disabled
 * ```
 *
 * @returns A select element with CSS Custom Property styling.
 */
export const Select = ({
  className,
  children,
  onChange = () => {},
  ...props
}: SelectProps) => {
  return (
    <select
      className={classNames("select", className)}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
};
