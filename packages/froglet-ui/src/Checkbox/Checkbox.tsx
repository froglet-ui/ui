"use client";

// Library Imports
import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
// Local Imports
import "./checkbox.css";

interface CheckboxProps extends InputProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Include the onChange handler
}

/**
 * The Checkbox Component
 *
 * @param checked - The checked state of the checkbox (controlled).
 * @param onChange - The callback for when the checkbox state changes.
 * @param className - Additional CSS classes.
 *
 * @returns A checkbox input styled with CSS Custom Properties.
 */
export const Checkbox = ({
  checked,
  onChange,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <Input
      {...props}
      type="checkbox"
      checked={checked}
      onChange={onChange} // Handling the onChange event
      className={classNames("input--checkbox", className)}
    />
  );
};
