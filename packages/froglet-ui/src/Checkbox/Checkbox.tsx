"use client";

import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
import "./checkbox.css";

export interface CheckboxProps extends InputProps {
  /** The checked state of the checkbox (controlled). */
  checked?: boolean;
  /** Callback fired when the checked state changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<input>` element. */
  ref?: React.Ref<HTMLInputElement>;
}

/** A brandless checkbox input. All visual styling is driven by CSS custom properties. */
export const Checkbox = ({
  checked,
  className,
  onChange = () => {},
  ref,
  ...props
}: CheckboxProps) => {
  return (
    <Input
      type="checkbox"
      checked={checked}
      className={classNames("input--checkbox", className)}
      onChange={onChange}
      ref={ref}
      {...props}
    />
  );
};
