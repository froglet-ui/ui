"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./grid.css";

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns this item spans. Sets `--grid-item-column-span`. CSS default: `12`. */
  columnSpan?: number;
  /** Number of rows this item spans. Sets `--grid-item-row-span`. CSS default: `1`. */
  rowSpan?: number;
  /** Grid column start line. Sets `--grid-item-column`. CSS default: `auto`. */
  column?: number | string;
  /** Grid row start line. Sets `--grid-item-row`. CSS default: `auto`. */
  row?: number | string;
  /** Inline-axis self-alignment. Sets `--grid-item-justify-self`. CSS default: `stretch`. */
  justifySelf?: React.CSSProperties["justifySelf"];
  /** Block-axis self-alignment. Sets `--grid-item-align-self`. CSS default: `stretch`. */
  alignSelf?: React.CSSProperties["alignSelf"];
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Child content. */
  children?: ReactNode;
  /** Forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** A CSS Grid item. All layout is driven by CSS custom properties. */
export const GridItem = ({
  columnSpan,
  rowSpan,
  column,
  row,
  justifySelf,
  alignSelf,
  className,
  children,
  style,
  ref,
  ...props
}: GridItemProps) => {
  const gridStyle = {
    ...style,
    ...(columnSpan !== undefined && { "--grid-item-column-span": columnSpan }),
    ...(rowSpan !== undefined && { "--grid-item-row-span": rowSpan }),
    ...(column !== undefined && { "--grid-item-column": column }),
    ...(row !== undefined && { "--grid-item-row": row }),
    ...(justifySelf !== undefined && {
      "--grid-item-justify-self": justifySelf,
    }),
    ...(alignSelf !== undefined && { "--grid-item-align-self": alignSelf }),
  } as React.CSSProperties;

  return (
    <div
      className={classNames("grid-item", className)}
      style={gridStyle}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
