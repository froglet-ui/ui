"use client";

import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./grid.css";

export interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the grid. */
  children?: ReactNode;
  /** Number of equal-width columns. Sets `--grid-container-columns`. CSS default: `12`. */
  columns?: number;
  /** Grid gap. Sets `--grid-container-gap`. CSS default: `1rem`. */
  gap?: React.CSSProperties["gap"];
  /** Grid auto rows. Sets `--grid-container-auto-rows`. CSS default: `auto`. */
  autoRows?: React.CSSProperties["gridAutoRows"];
  /** Grid auto flow direction. Sets `--grid-container-auto-flow`. CSS default: `row`. */
  autoFlow?: React.CSSProperties["gridAutoFlow"];
  /** Justify content alignment. Sets `--grid-container-justify-content`. CSS default: `start`. */
  justifyContent?: React.CSSProperties["justifyContent"];
  /** Align content alignment. Sets `--grid-container-align-content`. CSS default: `start`. */
  alignContent?: React.CSSProperties["alignContent"];
  /** Additional CSS classes. Use to apply a modifier or token block. */
  className?: string;
  /** Forwarded to the underlying `<div>` element. */
  ref?: React.Ref<HTMLDivElement>;
}

/** A CSS Grid container. All layout is driven by CSS custom properties. */
export const GridContainer = ({
  children,
  columns,
  gap,
  autoRows,
  autoFlow,
  justifyContent,
  alignContent,
  className,
  style,
  ref,
  ...props
}: GridContainerProps) => {
  const gridStyle = {
    ...style,
    ...(columns !== undefined && { "--grid-container-columns": columns }),
    ...(gap !== undefined && { "--grid-container-gap": gap }),
    ...(autoRows !== undefined && { "--grid-container-auto-rows": autoRows }),
    ...(autoFlow !== undefined && { "--grid-container-auto-flow": autoFlow }),
    ...(justifyContent !== undefined && {
      "--grid-container-justify-content": justifyContent,
    }),
    ...(alignContent !== undefined && {
      "--grid-container-align-content": alignContent,
    }),
  } as React.CSSProperties;

  return (
    <div
      className={classNames("grid-container", className)}
      style={gridStyle}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
