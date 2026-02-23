"use client";

import classNames from "classnames";
import { Input, InputProps } from "../Input/Input";
import "./switch.css";

export interface SwitchProps extends InputProps {
  /** The checked state of the switch (controlled). */
  checked?: boolean;
  /** Callback fired when the checked state changes. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Forwarded to the underlying `<input>` element. */
  ref?: React.Ref<HTMLInputElement>;
}

/** A brandless toggle switch. All visual styling is driven by CSS custom properties. */
export const Switch = ({
  className,
  onChange = () => {},
  ref,
  role = "switch",
  ...props
}: SwitchProps) => {
  return (
    <Input
      type="checkbox"
      role={role}
      className={classNames("input--switch", className)}
      onChange={onChange}
      ref={ref}
      {...props}
    />
  );
};
