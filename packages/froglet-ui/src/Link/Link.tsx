"use client";

import { ReactNode, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import "./link.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content. Supports text, icons, and other React nodes. */
  children?: ReactNode;
  /** Additional CSS classes. Use to apply a token block. */
  className?: string;
  /** Ref forwarded to the underlying `<a>` element. */
  ref?: React.Ref<HTMLAnchorElement>;
}

/** A brandless anchor element styled entirely through CSS custom properties. */
export const Link = ({ children, className, ref, ...props }: LinkProps) => {
  return (
    <a ref={ref} className={classNames("link", className)} {...props}>
      {children}
    </a>
  );
};
