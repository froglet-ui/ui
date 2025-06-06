"use client";

// Library Imports
import { ReactNode, CSSProperties } from "react";
import classNames from "classnames";
// Local Imports
import "./grid.css";

/**
 * Props for the GridContainer component.
 */
interface GridContainerProps {
  /**
   * Child elements to render inside the grid.
   */
  children: ReactNode;

  /**
   * Number of equal-width columns in the grid.
   * Defaults to 12.
   */
  columns?: number;

  /**
   * Optional additional CSS classes.
   */
  className?: string;
}

/**
 * GridContainer Component
 *
 * Provides a flexible grid system using CSS Grid and custom properties.
 *
 * __CSS Custom Properties__
 *
 * ```css
 * --grid-container-gap
 * --grid-container-columns
 * --grid-container-auto-rows
 * --grid-container-auto-flow
 * --grid-container-justify-content
 * --grid-container-align-content
 * ```
 */
export const GridContainer = ({
  children,
  columns = 12,
  className,
}: GridContainerProps) => {
  const style: CSSProperties = {
    "--grid-container-columns": columns,
  } as CSSProperties;

  return (
    <div className={classNames("grid-container", className)} style={style}>
      {children}
    </div>
  );
};
