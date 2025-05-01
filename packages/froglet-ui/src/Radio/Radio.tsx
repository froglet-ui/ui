"use client";

// Library Imports
import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
// Local Imports
import "./radio.css";

interface RadioProps extends InputProps {
  /**
   * The checked state of the radio button (controlled).
   */
  checked?: boolean;
  /**
   * The callback for when the radio state changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Additional CSS classes for styling.
   */
  className?: string;
}

/**
 * The Radio Component
 *
 * A styled radio input that extends the Froglet `Input` component. Supports optional controlled behavior
 * and integrates with native radio groups via the `name` attribute.
 *
 * @param checked - The checked state of the radio button (controlled).
 * @param className - Additional CSS classes.
 * @param onChange - The callback for when the radio state changes.
 * @param props - Any additional props, including ARIA attributes.
 *
 * __Note:__ For proper grouping behavior, ensure all radio buttons in the same group share the same `name` prop.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --radio-size
 * --radio-border-width
 * --radio-border-color
 * --radio-border-radius
 * --radio-background-color
 * --radio-border-color-hover
 * --radio-background-color-hover
 * --radio-outline-width-focus
 * --radio-outline-color-focus
 * --radio-outline-offset-focus
 * --radio-border-color-checked
 * --radio-background-color-checked
 * --radio-dot-color-checked
 * --radio-border-color-disabled
 * --radio-background-color-disabled
 * --radio-dot-color-disabled
 * ```
 *
 * @returns A radio button input styled with CSS Custom Properties.
 */
export const Radio = ({
  checked,
  className,
  onChange = () => {},
  ...props
}: RadioProps) => {
  return (
    <Input
      type="radio"
      checked={checked}
      className={classNames("input--radio", className)}
      onChange={onChange}
      {...props}
    />
  );
};
