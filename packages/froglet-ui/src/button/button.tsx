"use client";

// Library Imports
import { ReactNode } from "react";
import classNames from "classnames";
// Local Imports
import "./button.css";

/**
 * An interface describing the Button props.
 *
 */
interface ButtonProps {
  /**
   * Inner Button content.
   */
  children: ReactNode;

  /**
   * Additional CSS Classes.
   */
  className?: string;

  /**
   * Button Click Handler.
   */
  onClick?: () => void;
}

/**
 * The Button Component
 *
 * @param props - The button props: children, className, and onClick.
 *
 * __CSS Custom Properties__
 *
 *```css
 * --button-background-color
 * --button-text-color
 * --button-border-color
 * --button-padding
 * --button-font-size
 * --button-border-radius
 * --button-hover-background-color
 * --button-hover-text-color
 * --button-disabled-background-color
 * --button-disabled-text-color
 *```
 *
 * @returns A button element with CSS Custom Property styling.
 *
 */
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={classNames("button", className)} onClick={onClick}>
      {children}
    </button>
  );
};
