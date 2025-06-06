"use client";

// Library Imports
import { ReactNode } from "react";
import classNames from "classnames";
// Local Imports
import "./grid.css";

/**
 * Props for the GridItem component.
 */
interface GridItemProps {
  /**
   * Content inside the grid item.
   */
  children: ReactNode;

  /**
   * Additional CSS classes (e.g., BEM modifiers).
   */
  className?: string;
}

/**
 * The GridItem component represents a single item in a CSS Grid layout.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --grid-item-column
 * --grid-item-row
 * --grid-item-column-span
 * --grid-item-row-span
 * --grid-item-justify-self
 * --grid-item-align-self
 * ```
 */
export const GridItem = ({ children, className }: GridItemProps) => {
  return <div className={classNames("grid-item", className)}>{children}</div>;
};
