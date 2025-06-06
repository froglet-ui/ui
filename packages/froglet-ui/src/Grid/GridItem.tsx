"use client";

// Library Imports
import { ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
// Local Imports
import "./grid.css";

/**
 * The GridItem component represents a single item in a CSS Grid layout.
 *
 * @param props - All standard HTML div attributes, plus optional `columnSpan`.
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
 *
 * These can be overridden via a BEM-style class or inline styles if needed.
 */
interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The number of columns this item should span (typically 1–12).
   */
  columnSpan?: number;

  /**
   * Optional class name for BEM modifiers or overrides.
   */
  className?: string;

  /**
   * The child content.
   */
  children?: ReactNode;
}

/**
 * The GridItem Component
 */
export const GridItem = ({
  columnSpan,
  className,
  children,
  style,
  ...props
}: GridItemProps) => {
  const gridStyle =
    columnSpan !== undefined
      ? ({
          ...style,
          "--grid-item-column-span": columnSpan,
        } as React.CSSProperties)
      : style;

  return (
    <div
      className={classNames("grid-item", className)}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
};
