"use client";

import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
import "./radio.css";

export interface RadioProps extends InputProps {
  /** The checked state of the radio button (controlled). */
  checked?: boolean;
  /** Callback fired when the checked state changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<input>` element. */
  ref?: React.Ref<HTMLInputElement>;
}

/** A brandless radio button. All visual styling is driven by CSS custom properties. */
export const Radio = ({
  checked,
  className,
  onChange = () => {},
  ref,
  ...props
}: RadioProps) => {
  return (
    <Input
      type="radio"
      checked={checked}
      className={classNames("input--radio", className)}
      onChange={onChange}
      ref={ref}
      {...props}
    />
  );
};
