"use client";

// Library Imports
import { ReactNode, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./link.css";

/**
 * An interface describing the Link props.
 */
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link label or nested elements.
   * Supports text, icons, and other React nodes.
   */
  children?: ReactNode;

  /**
   * Additional CSS Classes.
   */
  className?: string;
}

/**
 * The Link Component
 *
 * @param props - All standard anchor attributes, plus children and className.
 *
 * __CSS Custom Properties__
 *
 *```css
 * --link-text-color
 * --link-font-family
 * --link-font-size
 * --link-font-weight
 * --link-text-decoration
 * --link-padding
 * --link-active-text-color
 * --link-focus-outline-width
 * --link-focus-outline-color
 * --link-focus-outline-offset
 * --link-focus-text-decoration
 * --link-hover-text-color
 * --link-hover-text-decoration
 * --link-visited-text-color
 *```
 *
 * @returns An anchor element with CSS Custom Property styling.
 */
export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a className={classNames("link", className)} {...props}>
      {children}
    </a>
  );
};
