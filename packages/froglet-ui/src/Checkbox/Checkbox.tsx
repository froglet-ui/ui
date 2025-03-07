"use client";

// Library Imports
import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
// Local Imports
import "./checkbox.css";

interface CheckboxProps extends InputProps {
  /**
   * The checked state of the checkbox (controlled).
   */
  checked?: boolean;
  /**
   * The callback for when the checkbox state changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS classes for styling.
   */
  className?: string;
}

/**
 * The Checkbox Component
 *
 * @param checked - The checked state of the checkbox (controlled).
 * @param className - Additional CSS classes.
 * @param onChange - The callback for when the checkbox state changes.
 * @param props - Any additional props, including ARIA attributes.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --checkbox-size
 * --checkbox-border-width
 * --checkbox-border-color
 * --checkbox-border-radius
 * --checkbox-background-color
 * --checkbox-border-color-hover
 * --checkbox-background-color-hover
 * --checkbox-outline-width-focus
 * --checkbox-outline-color-focus
 * --checkbox-outline-offset-focus
 * --checkbox-border-color-checked
 * --checkbox-background-color-checked
 * --checkbox-checkmark-color-checked
 * --checkbox-clip-path-checked
 * --checkbox-border-color-disabled
 * --checkbox-background-color-disabled
 * --checkbox-checkmark-color-disabled
 * ```
 *
 * @returns A checkbox input styled with CSS Custom Properties.
 */
export const Checkbox = ({
  checked,
  className,
  onChange = () => {},
  ...props
}: CheckboxProps) => {
  return (
    <Input
      type="checkbox"
      checked={checked}
      className={classNames("input--checkbox", className)}
      onChange={onChange}
      {...props}
    />
  );
};
