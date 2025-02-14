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
 * --button-hover-background-color
 * --button-hover-text-color
 * --button-disabled-background-color
 * --button-disabled-text-color
 * --button-border-width
 * --button-border-color
 * --button-border-radius
 * --button-disabled-border-color
 * --button-padding
 * --button-font-size
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
