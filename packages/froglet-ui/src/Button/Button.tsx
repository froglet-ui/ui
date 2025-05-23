"use client";

// Library Imports
import { ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./button.css";

/**
 * An interface describing the Button props.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button label or nested elements.
   * Supports text, icons, and other React nodes.
   */
  children?: ReactNode;

  /**
   * Additional CSS Classes.
   */
  className?: string;
}

/**
 * The Button Component
 *
 * @param props - All standard button attributes, plus children and className.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --button-background-color
 * --button-text-color
 * --button-font-size
 * --button-padding
 * --button-border-color
 * --button-border-width
 * --button-border-radius
 * --button-background-color-disabled
 * --button-text-color-disabled
 * --button-border-color-disabled
 * --button-background-color-hover
 * --button-text-color-hover
 * ```
 *
 * @returns A button element with CSS Custom Property styling.
 */
export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={classNames("button", className)} {...props}>
      {children}
    </button>
  );
};
